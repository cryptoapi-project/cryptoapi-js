const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: {
		'cryptoapi-lib': './src/index.ts',
		'cryptoapi-lib.min': './src/index.ts'
	},
	output: {
		path: path.resolve(__dirname, 'dist/bundles'),
			filename: '[name].js',
			libraryTarget: 'umd',
			library: 'cryptoapi',
			umdNamedDefine: true
	},
	resolve: {
		alias: {
			"@src": path.resolve(__dirname, 'src/'),
		},
		extensions: ['.ts', '.tsx', '.js']
	},
	devtool: 'source-map',
	module: {
		rules:  [{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader',
			exclude: /node_modules/,
		}]
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					ecma: 6,
				},
			}),
			new UglifyJsPlugin(),
		],
	},
};
