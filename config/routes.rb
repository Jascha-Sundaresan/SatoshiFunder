SatoshiFunder::Application.routes.draw do
  
  root "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :categories, only: [:index, :show]
    resources :projects
    resources :backs, only: [:create]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

end