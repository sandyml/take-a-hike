class VisitsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_error_response

  before_action :find_visit, only: [:update, :destroy]
  before_action :not_found_error_response, only: [:update, :destroy]

  before_action only: [:update, :destroy] do
    authorize_user_resource(@visit.user_id)
  end

  def index
    render json: Visit.all, status: :ok
  end

  def index
    if params[:user_id]
      user = User.find_by_id(params[:user_id])
      @visit = user.visits
    else 
      @visit = Visit.all
    end
      render json: @visit, include: [:user], except: [:user_id] 
  end

 # GET /visits/:id
  def show
    vis = Visit.find(params[:id])
    render json: vis, status: :ok
  end
 
  def create
    visit = current_user.visits.create(add_visit_params)
    # byebug
    if visit.save
      render json: visit, status: :created
    else
      # unprocessable_entity_error_response(visit)
      render json: { errors: visit.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # TODO: current_user to be the user of the visit
  def update
    @visit.update(visit_params)
    render json: @visit, include: [:user]
  end

# TODO: might not work check later
  def destroy
    @visit = Visit.find(params[:id])
      if @visit.user_id == current_user.id
        @visit.destroy
        render json: @visit, status: :ok    
      else
        render json: { error: ["Can not delete!"] }, status: :unauthorized
      end
  end

 private 

 def visit_params
  params.permit(:visited_date)
 end

 def add_visit_params
  params.permit(:trailhead_id, :visited_date, :visited)
  # params.permit(:trailhead_id, :visited_date, :visited), include: [:record_visited_today, :record_visited_date_today]
 end

 def find_visit
  @visit = Visit.find_by(id: params[:id])
 end

 # TODO: Might make this global for other controllers to use in ApplicationController
 def unprocessable_entity_error_response(object)
  render json: { errors: object.errors.full_messages }, status: :unprocessable_entity
 end

 # Other option 
 def not_found_error_response
  render json: { message: ["Visit not found"] }, status: :not_found unless @visit
 end

end