class SessionsController < ApplicationController
 # skip_before_action :authorize, only: [:create]
 # before_action :authorized, only: [:create]
 # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


 # TODO: RESCUE_FROM CLEANER 
 # TODO: DRY
 # TODO: login and logout methods here! 

 # /login 
 def create
  logged_in_user = User.find_by(username: params[:username])
  if logged_in_user&.authenticate(params[:password])
   session[:user_id] ||= logged_in_user.id 
   render json: logged_in_user
  else
   render_unprocessable_entity_response
  end
 end

 # /logout 
 def destroy
  session.delete :user_id
  head :no_content
  # render json: { message: ["You are now logged out!"] }
 end

 private

 def render_unprocessable_entity_response
  render json: { errors: ["Username or password does not match"] }, status: :unprocessable_entity
 end
 
end
