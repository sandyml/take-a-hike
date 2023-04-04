Rails.application.routes.draw do
  
  resources :users
  resources :trailheads
  resources :hikes
  resources :visits

  ## user ## 
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/get_current_user", to: "users#get_current_user"

  ## sessions ## 
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"

  # get "users/:user_id/visits", to: "visits#index"
  # get "users/:id/visits", to: "visits#index"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
