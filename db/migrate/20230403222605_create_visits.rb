class CreateVisits < ActiveRecord::Migration[6.1]
  def change
    create_table :visits do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :trailhead, null: false, foreign_key: true
      t.datetime :visited_date
      t.boolean :visited

      t.timestamps
    end
  end
end
