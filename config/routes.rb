Rails.application.routes.draw do
  
  resources :users
  resources :trailheads
  resources :hikes
  resources :visits
  resources :trailhead_amenities
  resources :amenities
  resources :difficulties
  resources :hike_difficulties

  ## user ## 
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  # get "/auth", to: "users#show"

  ## sessions ## 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # get "users/:user_id/visits", to: "visits#index"
  # get "users/:id/visits", to: "visits#index"
  
  # TODO: post "users/:id/:visits" 

  # TODO: Remove visits from visits or favorites 
  delete "/visits/:trailhead_id", to: "visits#remove" 
  # delete "/trailhead/:deleted_trailhead_id", to: "trailheads#remove"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
