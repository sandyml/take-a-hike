class Difficulty < ApplicationRecord
 has_many :hike_difficulties
 # has_many :hikes, through: :hike_difficulties
end
