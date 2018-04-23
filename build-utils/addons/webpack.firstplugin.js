module.exports = {
		plugins: [
				function apply () {       // can't use arrow function here because of how this is bound and will equal to nothing
						const compiler = this;
						console.log(compiler);
				}
		]
};