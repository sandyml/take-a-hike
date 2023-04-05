class VisitsController < ApplicationController

 # TODO: 

 def index
  render json: Visit.all
 end

 # TODO: Check again w byebug 
 def create
  # create a visited boolean if they went or they have not for the current_user
  visit = current_user.visits.build(visit_params)
  # render json if it passes validations
  if visit.save
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

 def unprocessable_entity_error_response(object)
  render json: { errors: object.errors.full_messages }, status: :unprocessable_entity
 end

end
