'use strict'

let path = require('path');
let webpack = require('webpack');

module.exports = {
	entry:'./client/public/main.js',
	output:{
		path: path.join(__dirname, 'client','public','dist'),
		filename:'bundle.js' 
	},
	module:{
		loaders:[
			{
				test:/.js/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['es2015','react']
				}
			},
			// {
			// 	test:/.css/,
			// 	loader:"style-loader!css-loader"
			// }
		]
	},
	plugins:[
		new webpack.DefinePlugin({
	    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		})
	]
}