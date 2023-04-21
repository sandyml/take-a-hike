class Visit < ApplicationRecord
  validates :user_id, :trailhead_id, :visited_date, :visited, presence: true

  belongs_to :user
  belongs_to :trailhead
  
  # for adding visit to my profile (MyVisitList.jsx)
  before_validation :record_visited_date_today, if: :new_record? 
  before_validation :record_visited_today, if: :new_record? 
  
  def record_visited_date_today
    # byebug
    self.visited_date = Date.today
  end
  
  def record_visited_today
    self.visited = true
  end
  
end