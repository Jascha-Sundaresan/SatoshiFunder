SatoshiFunder::Application.routes.draw do
  get "/start", to: "static_pages#start"
  get "/projects/all", to: "projects#all"
  
  root "static_pages#root"

  resource :session, only: [:new, :create, :destroy]
  resources :users
  resources :projects
end
