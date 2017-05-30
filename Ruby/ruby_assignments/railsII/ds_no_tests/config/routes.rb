Rails.application.routes.draw do
  root 'users#new'

#USERS ROUTES
  get 'users/new' => 'users#new'
  get 'users/show/:id/' => 'users#show'

#SECRETS ROUTES
  get 'secrets/' => 'secrets#index'
  post 'secrets/' => 'secrets#create'

  delete 'secrets/:id' => 'secrets#destroy'

#SESSIONS ROUTES
  get 'sessions/new' => 'sessions#new'
  post 'sessions/login' => 'sessions#log_in'
  post 'sessions/' => 'sessions#create'
  delete 'sessions/' => 'sessions#destroy'

#LIKES ROUTES
  post 'likes/' => 'likes#create'
  delete 'likes/:id' => 'likes#destroy'

end
