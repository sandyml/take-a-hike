class HikeSerializer < ActiveModel::Serializer
  # attributes :id, :distance, :elevation_gain, :image_url
  attributes :id, :distance, :elevation_gain, :image_url, :difficulties
  
  has_one :trailhead
  # has_many :difficulties

  def difficulties
    # byebug
    object.trailhead.difficulties.pluck(:name)
  end

end
