class CreateAccomodations < ActiveRecord::Migration[5.0]
  def change
    create_table :accomodations do |t|
      t.belongs_to  :user

      # address
      t.string      :street_address
      t.string      :suburb
      t.string      :city
      t.string      :province
      t.string      :country

      t.integer     :bedroom_count
      t.integer     :price
      t.integer     :bathroom_count
      t.string      :lounge_description
      t.string      :bathroom_description
      t.string      :bedroom_description
      t.integer     :garage_count
      t.string      :garage_description
      t.string      :kitchen_description
      t.boolean     :furnished
      t.string      :internet_access
      t.string      :near
    end
  end
end
