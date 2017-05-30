Rails.application.routes.draw do
  root 'users#new'
  # resources :users
  get 'users/' => 'users#index'
  get 'users/new' => 'users#new'
  get 'users/total' => 'users#total'
  get 'users/:id' => 'users#show'
  get 'users/:id/edit' => 'users#edit'
  post "users/" => "users#create"

  # resources :sessions, only: [:new, :create, :destroy]
  get 'sessions/' => 'sessions#index'
  post "sessions/" => "sessions#create"

  # resources :secrets, only: [:index, :create, :destroy]
  get 'secrets/' => 'secrets#index'
  get 'secrets/new' => 'secrets#new'
  get 'secrets/total' => 'secrets#total'
  get 'secrets/:id' => 'secrets#show'
  get 'secrets/:id/edit' => 'secrets#edit'
  post "secrets/" => "secrets#create"

  # resources :likes, only: [:create, :destroy]
  get 'likes/' => 'likes#index'
  post 'likes/create' => 'likes#create'
  delete 'likes/' => 'likes#destroy'

end
