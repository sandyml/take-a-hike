class HikeSerializer < ActiveModel::Serializer
  attributes :id, :distance, :elevation_gain, :image_url, :difficulties
  
  has_one :trailhead
  has_many :amenities

  def difficulties
    object.trailhead.difficulties.pluck(:name)
  end

end
