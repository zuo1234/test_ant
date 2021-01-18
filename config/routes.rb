Rails.application.routes.draw do
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :home, only: [:index] do
    collection do
      get :about
      get :article
      get :resource
    end
  end
end
