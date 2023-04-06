class TrailheadSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :amenities, :fees, :direction

  # TODO: do include in controller for :trailhead_amenities 
end
