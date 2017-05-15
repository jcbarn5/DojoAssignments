Rails.application.routes.draw do
  get 'users/' => 'users#index'

  get 'users/new' => 'users#new'

  get 'users/:id' => 'users#show'

  get 'users/:id/edit' => 'users#edit'

  get 'users/total' => 'users#total'

  post "users" => "users#create"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
