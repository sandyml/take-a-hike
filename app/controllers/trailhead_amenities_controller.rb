class TrailheadAmenitiesController < ApplicationController
 def index
  render json: TrailheadAmenity.all  
 end
end
