class TrailheadsController < ApplicationController
 # skip_before_action :authorize, only: [:index]

 # TODO: authorize skip only index? 
 # TODO: tentative if I need to create descriptions? 
 
 def index
  render json: Trailhead.all, status: :ok
 end

 # might not need create 
 def create
  # byebug
  @trailhead = Trailhead.new(trailhead_params)
  if @trailhead.save
  render json: @trailhead, status: :created
  else
  render json: { errors: @trailhead.errors.full_messages }, status: :unprocessable_entity
  end
end

 private

 def trailhead_params 
  params.permit(
    :name, 
    :location, 
    :amenities, 
    :fees,
    :direction 
  )
end

 def unprocessable_entity_error_response(object)
  render json: { errors: object.errors.full_messages }, status: :unprocessable_entity
 end

end
