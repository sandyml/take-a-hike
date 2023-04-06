class CreateTrailheadAmenities < ActiveRecord::Migration[6.1]
  def change
    create_table :trailhead_amenities do |t|
      t.belongs_to :amenity, null: false, foreign_key: true
      t.belongs_to :trailhead, null: false, foreign_key: true

      t.timestamps
    end
  end
end
