class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authorize

  def current_user
    @current_user = User.find_by_id(session[:user_id])
  end

  def logged_in?
    !!session[:user_id]
  end

  def authorize
    render json: { errors: ["You must be logged in"] }, status: :unauthorized unless logged_in?
  end

  ## already logged in and authorized
  # def now_authorized
  #   render json: { errors: ["You are already logged in"] }, status: :unauthorized if logged_in?
  # end

  ## TODO: grab user_id from resources in models 
  def authorize_user_resource(user_id)
    render json: { errors: ["You are not authorized"] }, status: :unauthorized unless user_id == current_user.id
  end

end
