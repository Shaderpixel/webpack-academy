/**
 * Created by rlock on 4/17/18.
 */
const path = require('path');
const ExamplePlugin = require('./ExamplePlugin.js');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
		module: {
    		rules: [
						{
								test: /\.jpe?g$/,
								use: [
										'file-loader',
										{
												loader: 'image-webpack-loader',
												options: {
													mozjpeg: {
															progressive: true,
															quality: 50
													}
												}
										}
								]
						}
				]
		},
		plugins: [
			new ExamplePlugin(),
		]
}