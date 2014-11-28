SatoshiFunder::Application.routes.draw do
  get "/discover", to: "categories#index"
  
  root "static_pages#root"

  resource :session, only: [:new, :create, :destroy]
  resources :users
  
  namespace :api, defaults: { format: :json } do
    resources :categories, only: [:index, :show]
    resources :projects
  end

end
