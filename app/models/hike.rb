class Hike < ApplicationRecord
  validates :distance, :elevation_gain, :image_url, presence: true 

  belongs_to :trailhead
end
