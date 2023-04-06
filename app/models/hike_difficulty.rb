class HikeDifficulty < ApplicationRecord
  belongs_to :hike
  belongs_to :difficulty
end
