Rails.application.routes.draw do
  root 'users#index'

  #USERS ROUTES
  post 'sessions/login' => 'session#log_in'
  post 'sessions/' => 'session#create'
  delete 'sessions/' => 'session#destroy'

  #USERS ROUTES
  get 'users/index' => 'users#index'
  get 'users/show/:id' => 'users#show'

  #PRODUCTS ROUTES
  get 'products/' => 'products#index'
  post 'products/create' => 'products#create'
  delete 'products/destroy/:id/' => 'products#destroy'

  #SOLD ROUTES
  post 'solds/create' => ''
  delete 'solds/destroy' => ''

  #BUY ROUTES

  post 'buys/create/:id/' => 'buys#create'
  delete 'buys/destroy' => ''


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
