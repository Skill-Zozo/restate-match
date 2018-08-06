module Accomodations
  class AccomodationController < ApplicationController

    before_action :authenticate_user!, only: :create

    def new

    end

    def create

    end
  end
end
