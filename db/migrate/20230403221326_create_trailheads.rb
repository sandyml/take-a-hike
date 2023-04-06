class CreateTrailheads < ActiveRecord::Migration[6.1]
  def change
    create_table :trailheads do |t|
      t.string :name
      t.string :location
      t.string :direction
      t.string :fees

      t.timestamps
    end
  end
end
