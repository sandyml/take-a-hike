class TrailheadsController < ApplicationController
#  skip_before_action :authorize, only: [:index]

 # TODO: authorize skip only index? 
 # TODO: tentative if I need to create descriptions? 
 # TODO: include attr not working 

 def index
  render json: Trailhead.all, status: :ok
 end

 def show
  # byebug
  # th = Trailhead.find_by(id: params[:id])
  render json: Trailhead.find_by(id: params[:id])
 end

# might not need create 
def create
  @trailhead = Trailhead.new(trailhead_params)
    if @trailhead.save
      render json: @trailhead, status: :created
    else
      # unprocessable_entity_error_response(@trailhead)
      render json: { errors: @trailhead.errors.full_messages }, status: :unprocessable_entity 
    end
end

 private

 def trailhead_params 
  params.permit(
    :name, 
    :location,
    :fees,
    :direction 
  )
end

def find_trailhead
  @trailhead = Trailhead.find_by(id: params[:id])
end

def unprocessable_entity_error_response(object)
  render json: { errors: object.errors.full_messages }, status: :unprocessable_entity
end

end
