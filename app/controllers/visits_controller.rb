class VisitsController < ApplicationController

 # TODO: Check create method again to see if its okay! 

 def index
  render json: Visit.all
 end

 # TODO: Check again w byebug 
 # TODO: Boolean if I visited or not or add to visit soon! 

 def create
  byebug
  # create a visited boolean if they went or they have not for the current_user
  visit = current_user.visits.create!(visit_params)
  # render json if it passes validations
  if visit.valid?
    render json: visit, status: :created
  else
   # unprocessable_entity_error_response(visit) 
    render json: { errors: visit.errors.full_messages }, status: :unprocessable_entity
  end
end

 private 

 # no need to user_id for current_user is logged in 
 def visit_params
  params.permit(:trailhead_id, :visited_date, :visited)
 end

 # TODO: Might make this global for other controllers to use in ApplicationController
 def unprocessable_entity_error_response(object)
  render json: { errors: object.errors.full_messages }, status: :unprocessable_entity
 end

end
