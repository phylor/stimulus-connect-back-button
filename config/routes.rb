Rails.application.routes.draw do
  root to: 'examples#new'

  resources :examples
end
