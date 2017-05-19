const webpack = require('webpack')
const path = require('path')

let config = {
	isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production'
}

module.exports = {
	target: 'web',
	devtool: config.isDevelopment ? 'source-map' : '',
	entry: {
		'bundle': (() => {

			let files = []

			if (config.isDevelopment) {
				files.push(
					'react-hot-loader/patch',
					'webpack-hot-middleware/client'
				)	
			}

			files.push(
				path.resolve(__dirname, 'src', 'client.js')
			)

			return files

		})()
	},
	output: {
		path: path.resolve(__dirname, 'dist', 'js'),
		filename: '[name].js',
		publicPath: '/js/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}