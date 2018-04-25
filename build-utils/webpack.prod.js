const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {
	mode: 'production',
	devtool: "source-map",
	module: {
		rules: [
				{
						test:/\.css/,
						use: ExtractTextWebpackPlugin.extract(
								{
										use: 'css-loader',
										fallback: 'style-loader'
								}
						)
				}
		]
	},
	plugins: [
			new ExtractTextWebpackPlugin("style.css")
	]

};

module.exports = config;