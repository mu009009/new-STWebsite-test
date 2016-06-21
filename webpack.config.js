var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
  __DEVELOPMENT__: JSON.stringify(JSON.parse(process.env.BUILD_DEVELOPMENT || false)),
  __PRODUCTION__: JSON.stringify(JSON.parse(process.env.BUILD_PRODUCTION || false))
});

var siteConfig = {
  entry: {
    index: [
			'font-awesome-webpack',
			'bootstrap-loader',
			'./source/assets/javascripts/index.js'
    ]
  },

  resolve: {
    root: __dirname + '/source/assets/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/[name].bundle.js',
  },

  module: {
    loaders: [
      {
        test: /source\/assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
      },

      { test: require.resolve("jquery"), loader: "expose?$" },

      {
        test: /[\\\/]vendor[\\\/]modernizr\.js$/,
        loader: "imports?this=>window!exports?window.Modernizr"
      },

			// Load styles
			{ test: /\.s*ss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
			{ test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },

			// Load jQuery for Bootstrap 4
			{ test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },

			// Fonts
			{
				loader: 'file?name=assets/[name].[ext]',
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/
			},
			// Images
			{
				loader: 'file?name=assets/[name].[ext]',
				test: /\.png($|\?)|\.jpg($|\?)|\.jpeg($|\?)|\.svg($|\?)/
			}
    ]
  },
  plugins: [
    definePlugin,
    new Clean(['.tmp']),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
			"window.jQuery": "jquery",
			"Tether": 'tether',
			"window.Tether": "tether"
    }),
  ],
};

module.exports = [ siteConfig ];
