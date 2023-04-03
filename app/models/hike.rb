class Hike < ApplicationRecord
  belongs_to :trailhead
  belongs_to :user
end
