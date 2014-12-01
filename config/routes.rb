SatoshiFunder::Application.routes.draw do
  
  root "static_pages#root"

  resource :session, only: [:new, :create, :destroy]
  resources :users
  
  namespace :api, defaults: { format: :json } do
    resources :categories, only: [:index, :show]
    resources :projects
    resources :users
    resource :session, only: [:create, :destroy]
  end

end