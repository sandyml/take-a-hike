Rails.application.routes.draw do
  
  resources :users, only: [:index, :create, :show]
  resources :trailheads
  resources :hikes
  resources :visits
  resources :trailhead_amenities
  resources :amenities
  resources :difficulties
  resources :hike_difficulties

  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  # get "/auth", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
