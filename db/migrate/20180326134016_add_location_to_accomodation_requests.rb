class AddLocationToAccomodationRequests < ActiveRecord::Migration[5.0]
  def change
    add_column :accomodation_requests, :location, :string
  end
end
