require 'bundler'

Bundler.require(:default, ENV['RACK_ENV'])

Dotenv.load

require './app'

use Rack::Session::Cookie

use Shopify::GraphQLProxy

run App
