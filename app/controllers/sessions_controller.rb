class SessionsController < ApplicationController
 # skip_before_action :authorize, only: [:create]
 # before_action :authorized, only: [:create]

 # TODO: RESCUE_FROM CLEANER 
 # TODO: DRY 

 # /login 
 def create
  byebug
  logged_in_user = User.find_by(username: params[:username])
  if logged_in_user&.authenticate(params[:password])
   session[:user_id] ||= logged_in_user.id 
   render json: logged_in_user
  else
   render json: { errors: ["Username or password does not match"] }, status: :unprocessable_entity
   # render json: { errors: logged_in_user.errors.full_messages }, status: :unprocessable_entity
  end
 end
 
end
