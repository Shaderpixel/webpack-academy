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


module.exports = (env) => {
		console.log(env);

		const envConfig = env == null ? '' : env.env ? require(`./build-utils/webpack.${env.env}`): null;
		const envAddons = env == null ? '' : env.addons ? addons(env.addons): [];


		// const envConfig = (env.env == undefined ? require(`./build-utils/webpack.${env.env}`) : ''; // if env.env is null then replace undefined with null
		const mergedConfig = webpackMerge(commonConfig, envConfig, ...envAddons); // spread env.addons array or single value into addons

		console.log(mergedConfig);
		return mergedConfig;
}