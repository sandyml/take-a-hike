class HikeSerializer < ActiveModel::Serializer
  attributes :id, :difficulty, :distance, :elevation_gain, :image_url
  has_one :trailhead
  has_one :user
end
