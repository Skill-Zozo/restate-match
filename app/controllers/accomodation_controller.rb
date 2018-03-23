class AccomodationController < ApplicationController

  before_action :authenticate_user!, only: :new_request

  def index
  end

  def new_request

    current_user.accomodation_requests.create(please_format_these_params)
  end

  def search
    # elasticsearch in this bxtch
  end

  private

  def please_format_these_params
    raw_params = params.permit(:taxi, :furnished, :internet, :beach, :hospital, :parking, :taxi, :train, price: [:min, :max], bedrooms: [:min, :max])
    processed_params = {
      min_price: raw_params[:price][:min],
      max_price: raw_params[:price][:max],
      min_bedroom: raw_params[:bedrooms][:min],
      max_bedroom: raw_params[:bedrooms][:max],
      near: raw_params.slice(:parking, :taxi, :train, :hospital, :beach).select { |(key, val)| val }.keys.map(&:to_s).join(',')
    }.merge(raw_params.slice(:furnished, :internet))
  end

end
