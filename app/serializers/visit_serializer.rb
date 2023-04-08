class VisitSerializer < ActiveModel::Serializer
  attributes :visited_date, :visited, :trailhead_id, :trailhead
  # attributes :id, :visited_date, :visited, :trailhead_id
  
  has_one :user
  has_one :trailhead
end
