const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
   // Options similar to the same options in webpackOptions.output
   // both options are optional
   filename: "style.css",
   chunkFilename: "[name].css"
    })
 ],


   module: {
     rules: [
       {
         test: /\.(sa|sc|c)ss$/,
         use: [
           {
             loader: MiniCssExtractPlugin.loader,
             options: {
               hmr: process.env.NODE_ENV === 'development',
             },
           },
           'css-loader',
           'sass-loader',
         ],
       },
     ],
   },


};



