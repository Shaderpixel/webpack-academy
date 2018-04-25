const commonPaths = require('./common-paths');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
		entry: {body:"./src/"},
		output: {
				filename: "[hash].[name].bundle.js",
				path: commonPaths.outputPath
		},
		module: {
				rules: [
						{
								test: /\.png/,
								use: [
										{
												loader: "url-loader",
												options: {
														limit: 10000
												}
										}
								]
						}
				]
		},
		plugins: [
				new webpack.ProgressPlugin(),
				new htmlWebpackPlugin()
		]
};

module.exports = config;