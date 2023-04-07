class TrailheadSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :fees, :direction, :amenities

  has_one :hike

  def amenities
    object.amenities.pluck(:name)
  end
  
end