class AddAccomodationRequestToUser < ActiveRecord::Migration[5.0]
  def change
    create_table :accomodation_requests do |t|
      t.timestamps
      t.belongs_to :user
      t.add_column :furnished, :boolean
      t.add_column :near, :string
      t.add_column :max_price, :integer
      t.add_column :min_price, :integer
      t.add_column :min_bedroom, :integer
      t.add_column :max_bedroom, :integer
      t.add_column :internet_access, :boolean
    end
  end
end
