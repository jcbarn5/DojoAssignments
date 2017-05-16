Rails.application.routes.draw do
  root "rpg#index"
  post "/reset" => "rpg#reset"
  post "/bets" => "rpg#gold"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
