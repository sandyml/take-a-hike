class AddVisitedToVisit < ActiveRecord::Migration[6.1]
  def change
    add_column :visits, :visited, :boolean
  end
end
