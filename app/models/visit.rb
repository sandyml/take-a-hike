class Visit < ApplicationRecord
  validates :user_id, :trailhead_id, :visited_date, :visited, presence: true
  # TODO: :visited_date might not be included / true if user have not visited hikes 

  belongs_to :user
  belongs_to :trailhead

  # delegate :hikes, to: :treailhead
  # delegate :hike, to: :trailhead, prefix: :trailhead

  validates :visited_date, presence: true
end
