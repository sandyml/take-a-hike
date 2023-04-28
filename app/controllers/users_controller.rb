class UsersController < ApplicationController
 rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
 skip_before_action :authorize, only: [:create, :index] # don't need to be logged in in order to run create
 before_action :now_authorized, only: [:create, :destroy]
 before_action :not_found_error_response, only: [:update, :destroy]

  def index
    render json: User.all, status: :ok
  end

  # TODO: grab current_user method from SessionsController (not the instance from authorize)
  # will give me the current_user /me
  def show
    render json: current_user
  end

# other signup method option 
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def destroy
    byebug
    @user = User.find(params[:id])
      if @visit.user_id == current_user.id
        @visit.destroy
        render json: @visit, status: :ok    
      else
        render json: { error: ["Can not delete!"] }, status: :unauthorized
      end
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end

  def render_unprocessable_entity_response(object)
    render json: { errors: object.record.errors.full_messages }, status: :unprocessable_entity
  end

end
