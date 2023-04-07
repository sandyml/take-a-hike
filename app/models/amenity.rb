class Amenity < ApplicationRecord
 validates :name, presence: true

 has_many :trailheads
 has_many :trailhead_amenities, through: :trailheads
end
