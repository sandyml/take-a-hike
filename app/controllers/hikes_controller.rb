class HikesController < ApplicationController
 def index
  render json: Hike.all, status: :ok
 end
end
