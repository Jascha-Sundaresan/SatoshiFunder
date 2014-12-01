class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.integer :project_id, null: false
      t.integer :amount, null: false
      t.date :delivery_date, null: false
      t.string :details, null: false

      t.timestamps
    end
    add_index :pledges, :project_id
  end
end
