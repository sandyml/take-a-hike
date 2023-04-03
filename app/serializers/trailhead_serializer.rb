class TrailheadSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :amenities, :fees
end
