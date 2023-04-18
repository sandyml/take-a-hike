class Visit < ApplicationRecord
  validates :user_id, :trailhead_id, :visited_date, :visited, :record_visited_date_today, :record_visited_today, presence: true
  # validates :visited_date, presence: true

  belongs_to :user
  belongs_to :trailhead
  
  before_create :record_visited_date_today
  before_create :record_visited_today
  
  def record_visited_date_today
    self.visited_date = Date.today
  end
  
  def record_visited_today
    self.visited = true
  end
  
end

# has_many :amenities
# delegate :amenities, to: :trailhead