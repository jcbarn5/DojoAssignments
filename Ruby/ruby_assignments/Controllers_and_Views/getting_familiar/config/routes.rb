Rails.application.routes.draw do
  root "products#index"
  get "hello" => "products#hello"
  # the :name param becomes options
  get "say/hello(/:name)" => "products#say"
  get "times" => "products#times"
  get "times/restart" => "products#restart"

end


# the :name param becomes options
# get "say/hello(/:name)" => "displays#say"
# get "times" => "displays#times"
# get "times/restart" => "displays#restart"
