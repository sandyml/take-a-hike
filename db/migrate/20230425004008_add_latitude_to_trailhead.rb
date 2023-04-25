class AddLatitudeToTrailhead < ActiveRecord::Migration[6.1]
  def change
    add_column :trailheads, :latitude, :string
  end
end
