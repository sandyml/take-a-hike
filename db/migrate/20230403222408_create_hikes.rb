class CreateHikes < ActiveRecord::Migration[6.1]
  def change
    create_table :hikes do |t|
      t.string :distance
      t.string :elevation_gain
      t.string :image_url
      t.belongs_to :trailhead, null: false, foreign_key: true

      t.timestamps
    end
  end
end
