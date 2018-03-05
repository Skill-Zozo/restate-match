class AccomodationController < ApplicationController

  def index
  end

  def request
    current_user.accomodation_request.create(data)
  end

  def search
  end

end
