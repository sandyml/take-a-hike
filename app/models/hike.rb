class Hike < ApplicationRecord
  validates :distance, :elevation_gain, :image_url, presence: true 

  belongs_to :trailhead
 
  # TODO 
  # has_many :trailheads, dependent: :destroy
  # has_many :amenities, through: :trailhead_amenities
end
