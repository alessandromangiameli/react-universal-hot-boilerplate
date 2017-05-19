const webpack = require('webpack')
const path = require('path')

module.exports = {
	devtool: 'source-map',
	entry: {
		'bundle': [
			'babel-polyfill',
			'react-hot-loader/patch',
			'./src/client'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist', 'js'),
		filename: '[name].js'
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
	}
}