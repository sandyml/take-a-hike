class UsersController < ApplicationController
 rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_error_response

# skip_before_action :authorize, only: [:index, :get_current_user, :create]
before_action :now_authorized, only: [:get_current_user, :create]

 def index
  render json: User.all
 end

 def get_current_user
  render json: current_user
 end

 def create
  user = User.create(user_params)
  if user.valid?
    session[:user_id] = user.id
    render json: user, status: :created
  else
    render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
  end
end

# other signup method option 
# def create
#   user = User.create!(user_params)
#   session[:user_id] = user.id
#   render json: user, status: :created
# end

# tentative
def show
 if @current_user
  render json: @current_user, status: :ok 
 else
  render json: { errors: ["User not found"] }, status: :not_found
 end  
end

 private
 def user_params
  params.permit(:username, :email, :password)
 end

 def unprocessable_entity_error_response(object)
  render json: { errors: object.errors.full_messages }, status: :unprocessable_entity
 end

end
