class SessionsController < ApplicationController
 skip_before_action :authorize, only: [:create]
 before_action :now_authorized, only: [:create]
 rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

 # [x] TODO: RESCUE_FROM CLEANER 
 # [x] TODO: DRY
 # [x] TODO: login and logout methods here! 

 # /login 
 # if user exists and authenticated then set session user_id to this logged_in_user.id
 def create
  logged_in_user = User.find_by(username: params[:username])
  if logged_in_user&.authenticate(params[:password])
   session[:user_id] ||= logged_in_user.id 
   render json: logged_in_user, status: :created
  else
   render_unprocessable_entity_response
  end
 end

 # /logout 
 def destroy
  session.delete :user_id
  # head :no_content
  render json: { message: ["You are now logged out!"] }, status: :ok # will remove just testing on POSTMAN
 end

 private

 def render_unprocessable_entity_response
  render json: { errors: ["Invalid Username or Password"] }, status: :unprocessable_entity
 end
 
end
