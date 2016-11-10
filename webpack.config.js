const webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const NODE_ENV = JSON.stringify(process.env.NODE_ENV);
console.log('THE NODE_ENV IS', NODE_ENV);

const common = {
  entry: {
		vendor: [
			'font-awesome-webpack',
			'bootstrap-loader'],
		index: './source/assets/javascripts/index.js',
  },
  resolve: {
		extensions: ['', '.js', '.jsx'],
		root: __dirname + '/source/assets/javascripts'
		// root: [path.join(__dirname, './src')]
  },
	// resolve: {
		// root: __dirname + '/source/assets/javascripts',
  // },

  module: {
		loaders: [
      {
        test: /source\/assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
				loader: 'babel'
      },

      { test: require.resolve("jquery"), loader: "expose?$" },

      {
        test: /[\\\/]vendor[\\\/]modernizr\.js$/,
        loader: "imports?this=>window!exports?window.Modernizr"
      },

			// Load styles
			{ test: /\.s*ss$/, loaders: [ 'style', 'css', 'postcss', 'sass?sourceMap=true' ] },
			{ test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },

			// // Load jQuery for Bootstrap 4
			// { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },

			// Fonts
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
      },
			// Images
			{
				loader: 'file?name=assets/[name].[ext]',
				test: /\.png($|\?)|\.jpg($|\?)|\.jpeg($|\?)|\.svg($|\?)|\.gif($|\?)/
				// test: /\.png($|\?)|\.jpg($|\?)|\.jpeg($|\?)|\.svg($|\?)\.gif($|\?)/
			}
    ]
  },
  plugins: [
    // definePlugin,
    new Clean(['.tmp']),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
			"window.jQuery": "jquery",
			"Tether": 'tether',
			"window.Tether": "tether"
		})
		// new webpack.optimize.CommonsChunkPlugin("assets/commons.js")
  ]
};

var config;
switch(NODE_ENV) {
  case '"production"':
    config = merge(common, {
      output: {
        path: __dirname + '/.tmp/dist',
        publicPath: 'https://mu009009.github.io/',
        filename: 'assets/[name].bundle.js'
      }
    });
    break;
  default:
    config = merge(common, {
      output: {
        path: __dirname + '/.tmp/dist',
        publicPath: 'http://127.0.0.1:4567/',
        filename: 'assets/[name].bundle.js'
      },
      devtool: 'eval-source-map'
    });
}

module.exports = [ config ];
