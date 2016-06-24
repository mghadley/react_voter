Rails.application.routes.draw do
  root 'home#index'

  namespace :api, { format: :json } do
    post 'irv', to: 'voting#irv'
  end
end
