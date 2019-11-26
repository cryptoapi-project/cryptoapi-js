const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		'crypto-api': './src/index.ts',
		'crypto-api.min': './src/index.ts'
	},
	output: {
		path: path.resolve(__dirname, 'dist/bundles'),
			filename: '[name].js',
			libraryTarget: 'umd',
			library: 'cryptoapi',
			umdNamedDefine: true
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	devtool: 'source-map',
	module: {
		rules:  [{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader',
			exclude: /node_modules/,
			query: {
				declaration: true,
			}
		}]
	},
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
};
