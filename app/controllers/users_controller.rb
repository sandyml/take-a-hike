class UsersController < ApplicationController
 rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

# skip_before_action :authorize, only: [:index, :get_current_user, :create]
# before_action :now_authorized, only: [:get_current_user, :create, :index]

  def index
    render json: User.all, status: :ok
  end

# tentative
  def show
  if @current_user
   render json: @current_user, status: :ok 
  else
   render json: { errors: ["User not found"] }, status: :not_found
  end  
 end


 def get_current_user
  render json: current_user
 end

#  def create
#   user = User.create!(user_params)
#   # validation runs when data is saved or valid? depending on new/save or create!/valid? 
#   if user.valid?
#     session[:user_id] = user.id
#     render json: user, status: :created
#   else
#     render_unprocessable_entity_response(user)
#   end
# end

# other signup method option 
def create
  user = User.create!(user_params)
  session[:user_id] = user.id
  render json: user, status: :created
end

 private
 def user_params
  params.permit(:username, :email, :password)
 end

#  def render_unprocessable_entity_response(object)
#   byebug
#   render json: { errors: object.errors.full_messages }, status: :unprocessable_entity
#  end

 def render_unprocessable_entity_response(object)
  render json: { errors: object.record.errors.full_messages }, status: :unprocessable_entity
end

end
