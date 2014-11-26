SatoshiFunder::Application.routes.draw do
  get "/start", to: "static_pages#start"
  get "/discover", to: "categories#index"
  get "/projects/all", to: "projects#all"
  
  root "static_pages#root"

  resource :session, only: [:new, :create, :destroy]
  resources :users
  resources :projects
  resources :categories, only: [:index, :show]
end
