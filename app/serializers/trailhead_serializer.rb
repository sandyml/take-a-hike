class TrailheadSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :fees, :direction, :amenities
  # has_many :difficulties

  has_many :hikes

  # TODO: Can't grab amenities
  def amenities
    # byebug
    object.hike.amenities.pluck(:name)
  end

end

# TODO: do include in controller for :trailhead_amenities 