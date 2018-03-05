Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  get 'accomodation', to: 'accomodation#index'

  post 'accomodation/search', to: 'accomodation#search'

  put 'accomodation/request', to: 'accomodation#request'
end
