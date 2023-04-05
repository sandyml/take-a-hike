class Visit < ApplicationRecord
  validates :user_id, :trailhead_id, :visited_date, :visited, presence: true

  belongs_to :user
  belongs_to :trailhead
end
