class TrailheadAmenity < ApplicationRecord
  validates :amenity_id, :trailhead_id, presence: true 

  belongs_to :amenity
  belongs_to :trailhead

  # has_many :amenities
  # has_many :trailhead, through: :amenities
end
