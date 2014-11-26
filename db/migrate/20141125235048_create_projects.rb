class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.integer :goal_amount
      t.date :end_date
      t.integer :category_id
      t.string :img_url

      t.timestamps
    end
    add_index :projects, :user_id
  end
end
