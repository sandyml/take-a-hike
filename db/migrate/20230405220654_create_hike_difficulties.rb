class CreateHikeDifficulties < ActiveRecord::Migration[6.1]
  def change
    create_table :hike_difficulties do |t|
      t.belongs_to :hike, null: false, foreign_key: true
      t.belongs_to :difficulty, null: false, foreign_key: true
      t.belongs_to :trailhead, null: false, foreign_key: true

      t.timestamps
    end
  end
end
