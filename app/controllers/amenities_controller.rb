class AmenitiesController < ApplicationController
 def index
  render json: Amenity.all, status: :ok  
 end
end
