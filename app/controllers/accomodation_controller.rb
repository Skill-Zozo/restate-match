class AccomodationController < ApplicationController

  before_action :authenticate_user!, only: :new_request

  def index
    @min_price = Accomodation.minimum("price")
    @max_price = Accomodation.maximum("price")
    @min_bedroom = Accomodation.minimum("bedroom_count")
    @max_bedroom = Accomodation.maximum("bedroom_count")
  end

  def new_request
    render json: {
      errors: accomodation_request.errors.full_message,
      result_code: 'bad_request',
      status: '400',
      code: 400
    } unless accomodation_request.errors.empty?

    render json: {
      data: {
        request: accomodation_request.id
      },
      result_code: 'ok,',
      status: '200',
      code: 200
    }
  end

  # return data like so
  # {
  #   data: [
  #     {
  #       price: 124,
  #       bedroom_count: 5,
  #       bathroom_count: 9,
  #       garage_count: 78,
  #       ad_title: "brilliant house at Mowbray",
  #       images: [
  #         image001,
  #         image002,
  #         image003
  #       ]
  #     },
      
  #     {
  #       ...
  #     },

  #     ...
  #   ]
  # }
  def matches
    render json: {
      data: find_matches,
      result_code: 'ok',
      status: '200',
      code: 200
    }
  end

  def search
    # elasticsearch in this bxtch
  end

  private

  def accomodation_request
    @accomodation_request ||= AccomodationRequest.create(accomodation_request_params.merge(user_id: current_user.id))
  end
  
  def accomodation_request_params
    raw_params = params.permit(:taxi, :furnished, :internet_access, :beach, :hospital, :parking, :location, :train, price: [:min, :max], bedrooms: [:min, :max])
    processed_params = {
      min_price: raw_params[:price][:min],
      max_price: raw_params[:price][:max],
      min_bedroom: raw_params[:bedrooms][:min],
      max_bedroom: raw_params[:bedrooms][:max],
      near: raw_params.slice(:parking, :taxi, :train, :hospital, :beach).select { |(key, val)| val }.keys.map(&:to_s).join(',')
    }.merge(raw_params.slice(:furnished, :internet_access))
  end

  def find_matches
    # binding.pry
    acc_request = params.permit(:request_id).empty? ? accomodation_request_params : AccomodationRequest.find_by(id: params.permit(:request_id))
    price_sql_query = "price between #{acc_request[:min_price]} and #{acc_request[:max_price]}"
    bedroom_sql_query = "bedroom_count between #{acc_request[:min_bedroom]} and #{acc_request[:max_bedroom]}"
    furnished_sql_query = acc_request[:furnished] ? "furnished = 't'" : ""
    internet_sql_query = acc_request[:internet_access] ? "internet_access = 't'" : ""
    matching_listings = Accomodation.where([bedroom_sql_query, price_sql_query, furnished_sql_query, internet_sql_query].select(&:present?).join(' AND '))
    matching_listings.map do |listing|
      description = [
        "Bedroom: " + listing.bedroom_description,
        "Kitchen: " + listing.kitchen_description,
        "Bathroom: " + listing.bathroom_description
      ].join('\n')
      listing.as_json.merge(description: description)
    end
  end

end
