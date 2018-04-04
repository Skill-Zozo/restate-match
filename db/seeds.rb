# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create email: "testtenant@test.com", password:"str0ngpassw0rd"
owner = User.create email: "testowner@test.com", password:"str0ngpassw0rd"
[
  {
    street_address: "66 Loch Rd",
    price: 3150,
    suburb: "Rondebosch",
    city: "Cape Town",
    province: "Western Cape",
    country: "South Africa",
    bedroom_description: "50 square meters, single bed",
    bedroom_count: 1,
    bathroom_count: 1,
    bathroom_description: "Shower with toilet",
    lounge_description: "Lounge with 55 inch TV, sofa and same room as kitchen",
    kitchen_description: "Kitchen with sink, cardboards and stove",
    garage_count: 0,
    garage_description: nil,
    internet_access: "Fibre",
    furnished: true,
    near: "UCT, Red Cross Children's Hospital, Rondebosch Medical Centre, Rondebosch Commons, Riverside Mall"
  },

  {
    street_address: "237 Loop Street",
    price: 6500,
    suburb: "Mowbray",
    city: "Cape Town",
    province: "Western Cape",
    country: "South Africa",
    bedroom_description: "Barchelor Pad",
    bedroom_count: 1,
    bathroom_count: 1,
    bathroom_description: "Shower with toilet",
    lounge_description: "Barchelor Pad",
    kitchen_description: "Kitchen with sink, cardboards and stove",
    garage_count: 0,
    garage_description: nil,
    internet_access: nil,
    furnished: true,
    near: "Shoprite, Mowbray Police Station, KFC"
  },

  {
    street_address: "2366, Villa Italia, Ratanga Rd",
    price: 12000,
    suburb: "Century City",
    city: "Cape Town",
    province: "Western Cape",
    country: "South Africa",
    bedroom_description: "2 double beds",
    bedroom_count: 2,
    bathroom_count: 2,
    bathroom_description: "One bathroom in the master bedroom and another communal bathroom",
    lounge_description: "Spacious lounge leading to the kitchen and balcony",
    kitchen_description: "Kitchen with marble tops, sink, cardboards and stove",
    garage_count: 2,
    internet_access: "Fibre",
    furnished: true,
    near: "Canal Walk Century City, Ratanga Junction, Century CBD"
  }
].map do |accomodation|
  owner.accomodations.create accomodation
end
