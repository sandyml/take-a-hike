class Hike < ApplicationRecord
  validates :difficulty, :distance, :elevation_gain, :image_url, :trailhead_id, presence: true 

  belongs_to :trailhead
end
