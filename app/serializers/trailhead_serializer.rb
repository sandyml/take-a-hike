class TrailheadSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :fees, :direction, :amenities, :hikes, :difficulties, :latitude, :longitude

  has_many :hikes
  has_many :difficulties

  def amenities
    object.amenities.pluck(:name)
  end

  def hike  
    object.hikes
  end
  
end