class Hike < ApplicationRecord
  validates :distance, :elevation_gain, :image_url, :trailhead_id, presence: true 

  belongs_to :trailhead
 
  # TODO 
  has_many :trailhead_amenities, dependent: :destroy
  has_many :amenities, through: :trailhead_amenities
end
