Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    get '/sign-in', to: "devise/sessions#new", :as => :login
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  # TODO: sort out resources for accomodation -> request
  get 'accomodation/request/new', to: 'accomodations/accomodation_request#new'

  get 'accomodation/new', to: 'accomodations/accomodation#new'

  put 'accomodation/create', to: 'accomodations/accomodation#create'

  post 'accomodation/search', to: 'accomodations/accomodation#search'

  put 'accomodation/request/create', to: 'accomodations/accomodation_request#create'

  post 'accomodation/request/matches', to: 'accomodations/accomodation_request#matches'
end
