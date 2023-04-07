class TrailheadAmenity < ApplicationRecord
  belongs_to :amenity
  belongs_to :trailhead
end
