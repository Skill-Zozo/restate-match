class AddAccomodationRequestToUser < ActiveRecord::Migration[5.0]
  def change
    create_table :accomodation_requests do |t|
      t.timestamps
      t.belongs_to :user
      t.boolean :furnished
      t.string :near
      t.integer :max_price
      t.integer :min_price
      t.integer :min_bedroom
      t.integer :max_bedroom
      t.boolean :internet_access
    end
  end
end
