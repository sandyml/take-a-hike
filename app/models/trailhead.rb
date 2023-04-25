class Trailhead < ApplicationRecord
 validates :name, :location, :direction, :latitude, :longitude, :fees, presence: true 

 has_many :visits, dependent: :destroy
 has_many :users, through: :visits

 has_many :visits, dependent: :destroy
 has_many :hikes, through: :visits

 has_many :hikes 

 has_many :hike_difficulties, dependent: :destroy
 has_many :difficulties, through: :hike_difficulties

 has_many :trailhead_amenities, dependent: :destroy
 has_many :amenities, through: :trailhead_amenities

end