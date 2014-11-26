SatoshiFunder::Application.routes.draw do
  
  root "static_pages#root"

  resource :session, only: [:new, :create, :destroy]
  resources :users do
    resources :projects, only: [:new]
  end

  resources :projects, except: [:new]
end
