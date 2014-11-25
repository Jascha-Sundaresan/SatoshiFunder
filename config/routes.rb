SatoshiFunder::Application.routes.draw do
  
  root "static_pages#root"

  resource :sessions, only: [:new, :create, :destroy]
  resources :users
end
