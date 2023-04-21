class VisitSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :user, :visited_date, :visited, :trailhead_id, :trailhead, :hi, :hike, :amenities
  
  has_one :user
  has_one :trailhead

  def hi
    "hello"
  end

  def hike  
    object.trailhead.hikes
  end

  def visited_date
    object.visited_date.strftime("%m/%d/%Y")
  end

  # add amenities to trailhead cards
  def amenities
    object.trailhead.amenities
  end

  def all_amenities
    object.trailhead.amenities
  end
end
