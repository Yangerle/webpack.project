const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		another: './src/another-module.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'haha'
		})
	],
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',//它决定非入口 chunk 的名称(此项会对缓存配置有影响，先注释掉)
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	module: {
		rules: [
			//JSON 支持实际是内置的
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use:[
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use:[
					'file-loader'
				]
			}
		]
	}
};