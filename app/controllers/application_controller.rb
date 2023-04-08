class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize
  
  # boolean 
  def logged_in?
    !!session[:user_id]
  end

  # gives us nil or current_user and able to call this method anywhere ( seperate logics )
  # moved instance variable of @current_user to its own method
  def current_user
    User.find_by_id(session[:user_id])
    # User.find_by(id: session[:user_id])
  end

  def authorize
    # @current_user = User.find_by_id(session[:user_id]) 
    render json: { errors: ["Not Authorized": "You must be logged in"] }, status: :unauthorized unless logged_in?
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
