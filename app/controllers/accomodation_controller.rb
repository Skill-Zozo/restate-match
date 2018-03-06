class AccomodationController < ApplicationController

  before_action :authenticate_user!, only: :request

  def index
  end

  def request
    current_user.accomodation_requests.create(request_params)
  end

  def search
    # elasticsearch in this bxtch
  end

  private

  def request_params
    raw_params = params.permit(price: {}, bedrooms: {}, :taxi, :furnished, :internet_access, :parking, :taxi, :train)
    processed_params = {
      min_price: raw_params[:price][:min],
      max_price: raw_params[:price][:max],
      min_bedroom: raw_params[:bedrooms][:min],
      max_bedroom: raw_params[:bedrooms][:max],
      near: raw_params.slice(:parking, :taxi, :train, :beach).select { |(key, val)| val }.map(:to_s).join(','),
    }.merge(raw_params.slice(:furnished, :internet_access))
  end

end
