class App < Sinatra::Base
  set :public_folder, Proc.new { File.join(root, 'dist') }

  register React::Sinatra

  React::Sinatra.configure do |config|
    config.use_bundled_react = true
    config.env = ENV['RACK_ENV'] || :development
    config.asset_path = File.join('dist', 'server.js')
    config.runtime = :execjs
  end

  use OmniAuth::Builder do
    provider :shopify, ENV['SHOPIFY_API_KEY'], ENV['SHOPIFY_API_SHARED_SECRET'], :scope => 'read_products,read_orders,write_content'
  end

  helpers do
    def protected!
      return if authorized?
      halt 401, 'Not authorized'
    end

    def authorized?
      return unless session.key?(:shopify)
      true
    end
  end

  get '/*' do
    protected!
    erb :app
  end

  get '/auth/shopify/callback' do
    shop_name = params[:shop]
    token = request.env['omniauth.auth']['credentials']['token']

    session[:shopify] = {
      shop: shop_name,
      token: token
    }

    redirect '/'
  end
end
