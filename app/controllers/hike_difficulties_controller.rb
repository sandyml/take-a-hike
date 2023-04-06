class HikeDifficultiesController < ApplicationController
 def index
  render json: HikeDifficulty.all, status: :ok
 end
end
