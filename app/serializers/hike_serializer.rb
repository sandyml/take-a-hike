class HikeSerializer < ActiveModel::Serializer
  attributes :id, :distance, :elevation_gain, :image_url
  
  has_one :trailhead
end
