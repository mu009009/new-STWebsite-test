require 'rack'
require 'rack/contrib/try_static'
require 'middleman-core/load_paths'

::Middleman.setup_load_paths

require 'middleman-core'
require 'middleman-core/application'

# Serve files from the build directory
use Rack::TryStatic,
  root: 'build',
  urls: %w[/],
  try: ['.html', 'index.html', '/index.html']

run lambda { |env|
  [404, {'Content-Type' => 'text/plain'}, ['NOT FOUND']]
} 
