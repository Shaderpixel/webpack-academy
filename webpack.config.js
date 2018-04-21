const path = require('path');

module.exports = {
		mode: "development",
		entry: "./src/",
		output: {
				filename:"[chunkhash].[name].bundle.js",
				path:path.join(__dirname, `dist`)
		}
}