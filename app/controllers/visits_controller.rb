class VisitsController < ApplicationController
  skip_before_action :authorize, only: [:index]
 # [] TODO: Check create method again to see if its okay! 

 def index
  render json: Visit.all, status: :ok
 end

 # GET /visits/:id
 def show
  vis = Visit.find(params[:id])
  render json: vis, status: :ok
 end

#  def create
#   # byebug
#   # create a visited boolean if they went or they have not for the current_user
#   visit = current_user.visits.create!(visit_params)
#   # render json if it passes validations
#   if visit.valid?
#     render json: visit, status: :created
#   else
#    # unprocessable_entity_error_response(visit) 
#     render json: { errors: visit.errors.full_messages }, status: :unprocessable_entity
#   end
# end

def create
  # byebug
  visit = current_user.visits.create(visit_params)
  if visit.save
    render json: visit, status: :created
  else
    # unprocessable_entity_error_response(visit)
    render json: { errors: visit.errors.full_messages }, status: :unprocessable_entity
  end
end

# def create
#   visited_collection = Visit.create(user_id: params[:user_id], trailhead_id: params[:trailhead_id])
#   render json: visited_collection.to_json({ include: [:trailhead] }) 
# end

# TODO: Check Update && Delete methods 

# PATCH /visits/:id
# current_user be the user of the visited collection 
# can't figure out how to update 
# def update 
#     # byebug
#     @visit.update(visit_params)
#     render json: @visit
# end

# TODO: might not work check later
def update
  @visit = find_visit
    if @visit.user_id == current_user.id
      if @visit.update(visit_params)
        render json: @visit, status: :accepted
      else
        render json: { errors: @visit.errors.full_messages }, status: :unprocessable_entity
      end
    else 
      render json: { errors: ["Not an Authorized User"] }, status: :unprocessable_entity
    end
end

# DELETE /visits/:id
# def destroy 
#   @visit.destroy
#   render json: @visit
#   head :no_content
# end

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

# def destroy
#   visit_collection = Visit.find(params[:id])
#   visit_collection.destroy
#   head :no_content
#   # render json: { "Deleted": "deleted", visit: visit_collection }
#   # render json: { message: ["Visit has been deleted!"] }, status: :no_content
# end

 private 

 # no need to user_id for current_user is logged in 
 def visit_params
  params.permit(:trailhead_id, :visited_date, :visited)
 end

 def find_visit
  @visit = Visit.find_by(id: params[:id])
 end

 # TODO: Might make this global for other controllers to use in ApplicationController
 def unprocessable_entity_error_response(object)
  render json: { errors: object.errors.full_messages }, status: :unprocessable_entity
 end

 # Other option 
 def unprocessable_entity_error_response_not_found
  render json: { message: ["Visit not found"] }, status: :unprocessable_entity unless @visit
 end

end
