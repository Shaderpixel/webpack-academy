const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

// module.exports = {
// 		mode: "development",
// 		entry: "./src/",
// 		output: {
// 				filename:"[chunkhash].[name].bundle.js",
// 				path:path.join(__dirname, `dist`)
// 		}
// }
const addons = (addonsArg) => {         // addonsArg could be a string or array
		let addons = []
				.concat.apply([], [addonsArg])	// Normalize array of addons (flattens the array)
				.filter(Boolean); 							// If addons is undefined or falsy, filter it out of the array

		return addons.map((addonName) => {
					try {
							require(`./build-utils/addons/webpack.${addonName}.js`)
					}
					catch(error) {
							console.error(`--------------------------------------------------\nCannot locate addon -> [${addonName}] in build-utils`);
							throw error;
					}
				}
		); // map array of addonNames to an array of addon path
};


module.exports = (env = {env:'common'}) => {
		console.log(env);

		const envConfig = require(`./build-utils/webpack.${env.env}`);
		const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons)); // spread env.addons array or single value into addons

		console.log(mergedConfig);
		return mergedConfig;
}