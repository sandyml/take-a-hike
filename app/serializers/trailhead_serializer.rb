class TrailheadSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :fees, :direction, :amenities, :hikes

  has_many :hikes

  def amenities
    object.amenities.pluck(:name)
  end

  def difficulties
    object.first.hike_difficulties
  end

  # def hike
  #   object.pluck(:hike)
  # end
  
end