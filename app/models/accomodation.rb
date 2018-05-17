class Accomodation < ApplicationRecord
  belongs_to :user

  validates :price, presence: true
  validates :street_address, presence: true
  validates :bedroom_count, presence: true
  validates :bathroom_count, presence: true

  has_many_attached :images


end
