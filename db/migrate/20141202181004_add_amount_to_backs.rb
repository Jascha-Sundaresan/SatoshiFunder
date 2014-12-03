class AddAmountToBacks < ActiveRecord::Migration
  def change
    add_column :backs, :amount, :integer, null: false
  end
end
