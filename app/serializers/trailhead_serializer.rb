class TrailheadSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :fees, :direction, :amenities, :hikes, :hike

  has_many :hikes

  def amenities
    object.amenities.pluck(:name)
  end

  def hike  
    object.hikes
  end

  # def hike
  #   object.pluck(:hike)
  # end
  
end