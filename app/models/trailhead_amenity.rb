class TrailheadAmenity < ApplicationRecord
  # validates :amenity_id, :trailhead_id, presence: true 

  belongs_to :amenity
  belongs_to :trailhead

  # has_many :trailhead_amenities
  # has_many :amenities, through: :trailhead_amenities
end
