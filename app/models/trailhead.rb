class Trailhead < ApplicationRecord
 validates :name, :location, :direction, :fees, presence: true 

 has_many :visits, dependent: :delete_all
 has_many :users, through: :visits
 has_one :hike

end