class Visit < ApplicationRecord
  validates :user_id, :trailhead_id, :visited_date, :visited, presence: true

  belongs_to :user
  belongs_to :trailhead
  
  # for adding visit to my profile (MyVisitList.jsx)
  before_create :record_visited_date_today
  before_create :record_visited_today
  
  def record_visited_date_today
    object.visited_date = Date.today
    # object.visited_date.save
  end
  
  def record_visited_today
    self.visited = true
  end
  
end