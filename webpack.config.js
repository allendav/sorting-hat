// Webpack config file
module.exports = {
	entry: './assets/js/components/index.jsx',
	output: {
		path: __dirname + '/assets/js',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader'
			}
		]
	},
};
