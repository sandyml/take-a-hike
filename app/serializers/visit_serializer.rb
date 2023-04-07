class VisitSerializer < ActiveModel::Serializer
  attributes :id, :visited_date, :visited 
  
  has_one :user
  has_one :trailhead
end
