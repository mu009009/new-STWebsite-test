###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

data.case_studies.each do |study|
  proxy "/#{study.slug}.html", "/case_studies/template.html", :locals => { :study => study }, :ignore => true
end

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

activate :external_pipeline,
   name: :webpack,
   command: build? ?
   "export NODE_ENV=production && ./node_modules/webpack/bin/webpack.js -p" :
   "export NODE_ENV=development && ./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
   source: ".tmp/dist",
   latency: 1

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
  def nav_link_to(link, url, opts={})
    link = link_to(url, opts) { "<span>#{link}</span>" }
    prefix = request.path == url ? '<li class="active">' : '<li>'
    prefix + link + "</li>"
  end
  def random_phone
    "(" + rand.to_s[2..4].gsub(/0/) { 4 } + ") " + rand.to_s[2..4] + "-" + rand.to_s[2..5]
  end
  def tks_longevity
    Time.now.year - 2000
  end
end

set :css_dir, 'assets'
set :js_dir, 'assets'
set :images_dir, '/assets/images/'

# Build-specific configuration
configure :build do
  ignore 'images/*.psd'
  ignore 'stylesheets/lib/*'
  ignore 'stylesheets/vendor/*'
  ignore 'javascripts/lib/*'
  ignore 'javascripts/vendor/*'

  # modify the build directory if you are using s3_sync
  set :build_dir, 'build/'
  set :images_dir, 'assets/images/'

  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Use relative URLs
  activate :relative_assets

  # activate :directory_indexes
  page "/blog.html", :directory_index => false

  set :relative_links, true
end

#s3_sync requires you to have s3 login credentials stored in your .zshrc or .bash file
#export AWS_ACCESS_KEY_ID=""
#export AWS_SECRET_ACCESS_KEY=""

activate :s3_sync do |s3_sync|
  s3_sync.bucket                = 'test-www-stratifyd-com' # The name of the S3 bucket you are targetting. This is globally unique.
  # s3_sync.prefix 								= 'stratifyd'
  s3_sync.region                = 'us-west-2'     # The AWS region for your bucket.
  s3_sync.delete                = false # We delete stray files by default.
  s3_sync.after_build           = false # We chain after the build step by default. This may not be your desired behavior...
  s3_sync.prefer_gzip           = true
end
