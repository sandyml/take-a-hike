class Trailhead < ApplicationRecord
 validates :name, :location, :direction, :amenities, :fees, presence: true 

 has_many :visits, dependent: :destroy
 has_many :users, through: :visits
 has_one :hike

end