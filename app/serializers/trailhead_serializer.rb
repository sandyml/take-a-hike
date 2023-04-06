class TrailheadSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :fees, :direction

  # TODO: do include in controller for :trailhead_amenities 
end
