class AddDirectionToTrailhead < ActiveRecord::Migration[6.1]
  def change
    add_column :trailheads, :direction, :string
  end
end
