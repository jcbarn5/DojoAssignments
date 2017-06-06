Rails.application.routes.draw do
  root 'main#index'

  get 'main/index'

  get 'main/new'

  get 'main/create'

  get 'main/show'

  get 'main/edit'

  get 'main/update'

  get 'main/destroy'



end
