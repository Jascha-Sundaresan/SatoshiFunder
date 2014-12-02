SatoshiFunder::Application.routes.draw do
  
  root "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :categories, only: [:index, :show]
    resources :projects
    resources :users
    resource :session, only: [:create, :destroy]
  end

end