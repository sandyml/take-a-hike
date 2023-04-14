class TrailheadSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :fees, :direction, :amenities, :hike

  has_one :hike

  def amenities
    object.amenities.pluck(:name)
  end

  # def hike
  #   object.pluck(:hike)
  # end
  
end