module.exports={
	entry:"./entry.js",
	output:{
		path:__dirname, //__dirname当前文件夹下
		filename:"./dist/bundle.js"
	},
	module:{
		loaders:[
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
	          test: /\.(png|jpg|gif)$/,
	          loader: 'url-loader?limit=8192&name=./dist/img/[hash].[ext]'
        	},
        	{
	          test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
	          loader: 'file?name=./dist/fonts/[name].[ext]',
	        },
	        {
		        test: /\.js[x]?$/,
		        exclude: /node_modules/,
		        loader: 'babel-loader?presets[]=es2015&presets[]=react'
		    },
		]
	}
}

