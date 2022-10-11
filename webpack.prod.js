const HtmlWebPack = require('html-webpack-plugin')  // por defecto
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  // para css global
const CopyPlugin = require("copy-webpack-plugin");  // cargar imagenes y cualquier archivo estático

// Minificar el archivo css
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
    
    mode: 'production',

    output: {
        clean: true,  // Evitamos eliminar el build "viejo" cuando creamos uno nuevo 
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,         // Buscamos todos los archivos de extensión html
			    loader: 'html-loader',  // Llamamos al plugin, que se encargar de cargarlo
			    options: {
				    sources: false
			    }
            },
            {
                test: /\.css$/,  // Pasamos el css como un js
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /styles.css$/,  // Idem anterior pero de forma global  
                use: [ MiniCssExtractPlugin.loader, "css-loader" ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },  

    optimization: {
        minimize: true,  
        minimizer: [
            new CssMinimizer(),
            new Terser(),
        ]
    },

    plugins: [
        new HtmlWebPack({
            title: 'Mi WebPack App :v',
            template: './src/index.html'
        }),  // Nueva instancia del plugin. Ahora nuestro build vincula el html!
        new MiniCssExtractPlugin({
            filename: "[name].[fullhash].css",
            ignoreOrder: false
        }),
        new CopyPlugin({  // pasamos img y otros estaticos al build
            patterns: [
                { from: "src/assets/", to: "assets/" },
            ],
        })
    ],

}