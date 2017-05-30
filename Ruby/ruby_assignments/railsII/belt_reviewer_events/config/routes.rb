Rails.application.routes.draw do
  root 'users#index'

  #SESSION ROUTES
  # get 'sessions/new' => 'sessions#new'
  post 'sessions/login' => 'sessions#log_in'
  post 'sessions/' => 'sessions#create'
  delete 'sessions/' => 'sessions#destroy'


  #USERS ROUTES
  get 'users/index' => 'users#index'
  get 'users/show' => 'users#show'
  patch 'users/update' => 'users#update'
  # get 'users/delete' => ''

  #COMMENTS ROUTES
  get 'comments/index' => ''
  get 'comments/new' => ''
  post 'comments/create/:id' => 'comments#create'
  get 'comments/show' => ''
  get 'comments/edit' => ''
  get 'comments/update' => ''
  get 'comments/delete' => ''

  #EVENTS ROUTES
  get 'events/' => 'events#index'
  post 'events/' => 'events#create'
  get 'events/show/:id' => 'events#show'
  get 'events/edit/:id' => 'events#edit'
  patch 'events/update/:id' => 'events#update'
  delete 'events/destroy/:id' => 'events#destroy'


  #ATTENDS ROUTES
  get 'attends/new' => ''
  post 'attends/create/:id' => 'attends#create'
  get 'attends/show' => ''
  delete 'attends/:id' => 'attends#destroy'

end
