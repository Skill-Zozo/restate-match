class AccomodationController < ApplicationController

  before_action :authenticate_user!, only: :new_request

  def index
    @min_price = Accomodation.minimum("price")
    @max_price = Accomodation.maximum("price")
    @min_bedroom = Accomodation.minimum("bedroom_count")
    @max_bedroom = Accomodation.maximum("bedroom_count")
  end

  def new_request

    current_user.accomodation_requests.create(please_format_these_params)
  end

  def search
    # elasticsearch in this bxtch
  end

  private

  def please_format_these_params
    raw_params = params.permit(:taxi, :furnished, :internet_access, :beach, :hospital, :parking, :location, :train, price: [:min, :max], bedrooms: [:min, :max])
    processed_params = {
      min_price: raw_params[:price][:min],
      max_price: raw_params[:price][:max],
      min_bedroom: raw_params[:bedrooms][:min],
      max_bedroom: raw_params[:bedrooms][:max],
      near: raw_params.slice(:parking, :taxi, :train, :hospital, :beach).select { |(key, val)| val }.keys.map(&:to_s).join(',')
    }.merge(raw_params.slice(:furnished, :internet_access))
  end

end
