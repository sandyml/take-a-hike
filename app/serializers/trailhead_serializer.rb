class TrailheadSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :fees, :direction
  # has_many :difficulties

end

# TODO: do include in controller for :trailhead_amenities 