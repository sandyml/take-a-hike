class DifficultiesController < ApplicationController
 def index
  render json: Difficulty.all, status: :ok  
 end
end
