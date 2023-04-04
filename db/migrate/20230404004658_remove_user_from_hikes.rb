class RemoveUserFromHikes < ActiveRecord::Migration[6.1]
  def change
    remove_column :hikes, :user_id, :belongs_to
  end
end
