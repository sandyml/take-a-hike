class AddLongitudeToTrailhead < ActiveRecord::Migration[6.1]
  def change
    add_column :trailheads, :longitude, :string
  end
end
