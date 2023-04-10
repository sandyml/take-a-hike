class VisitSerializer < ActiveModel::Serializer
  attributes :id, :visited_date, :visited, :trailhead_id, :trailhead
  # attributes :id, :visited_date, :visited, :trailhead_id, :trailhead, :image_url
  
  has_one :user
  has_one :trailhead
  # has_many :hikes

  # def hi
  #   "hello"
  # end

  # TODO: image_url 
  # def image_url
  #   object.trailheads.image_url
  # end

  def visited_date
    object.visited_date.strftime("%m/%d/%Y")
  end
end
