const commonPaths = require('./common-paths');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
		entry: {body:"./src/"},
		output: {
				filename: "[chunkhash].[name].bundle.js",
				path: commonPaths.outputPath
		},
		plugins: [
				new webpack.ProgressPlugin(),
				new htmlWebpackPlugin()
		]
};

module.exports = config;