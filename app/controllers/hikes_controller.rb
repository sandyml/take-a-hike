class HikesController < ApplicationController

 def index
  render json: Hike.all
 end

 # def show
 #  byebug
 # end

end
