Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    get '/sign-in', to: "devise/sessions#new", :as => :login
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  get 'accomodation', to: 'accomodation#index'

  post 'accomodation/search', to: 'accomodation#search'

  put 'accomodation/request', to: 'accomodation#new_request'

  get 'accomodation/matches', to: 'accomodation#matches'
end
