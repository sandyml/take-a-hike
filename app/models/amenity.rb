class Amenity < ApplicationRecord
 # validates :name, presence: true
 has_many :trailhead_amenities
end
