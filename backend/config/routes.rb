Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'

  get 'signup' => 'clients#new'
  post 'clients' => 'clients#create'

end
