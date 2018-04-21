/**
 * Created by rlock on 4/17/18.
 */
const path = require('path');
const ExamplePlugin = require('./ExamplePlugin.js');

module.exports = {
    mode: 'production',

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

		// optimization: {
		// 		minimizer: []
		// },

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
						},
						{
								test: /\.js$/,
								exclude: /(node_modules)/,
								use: {
										loader: 'babel-loader',
										options: {
												// presets: ['babel-preset-env'] //specified through .babelrc
										}
								}
						}
				]
		},

		plugins: [
			new ExamplePlugin(),
		]
}