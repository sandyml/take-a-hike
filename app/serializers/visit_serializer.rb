class VisitSerializer < ActiveModel::Serializer
  attributes :id, :visited_date, :visited, :trailhead_id, :trailhead, :hi, :hike
  # attributes :id, :visited_date, :visited, :trailhead_id, :trailhead, :image_url
  
  has_one :user
  has_one :trailhead

  def hi
    "hello"
  end

  # it worked! TODO: Revisit
  def hike  
    object.trailhead.hikes
  end

  # TODO: image_url 
  # def image_url
  #   object.trailheads.image_url
  # end

  def visited_date
    object.visited_date.strftime("%m/%d/%Y")
  end
end
