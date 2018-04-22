const commonConfig = require('./build-utils/webpack.common');
// module.exports = {
// 		mode: "development",
// 		entry: "./src/",
// 		output: {
// 				filename:"[chunkhash].[name].bundle.js",
// 				path:path.join(__dirname, `dist`)
// 		}
// }

module.exports = (env) => {
		console.log(env);
		return commonConfig;
}