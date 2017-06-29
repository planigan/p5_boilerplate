let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].css",
  // filename: "css/[name].[contenthash].css",
  // disable: process.env.NODE_ENV === "development"
});

const extractPug = new ExtractTextPlugin({
  filename: "[name].html",
  // disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2016'],
              plugins: [require('babel-plugin-transform-object-rest-spread')]
            }
          },
          'eslint-loader'
        ]
      },{
        test: /\.(scss|sass)$/,
        loader: extractSass.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader', options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader', options: {
                sourceMap: true
              }
            }
          ]
        })
      },{
        test: /\.(pug|jade)$/,
        loaders: [
          'file-loader?name=[name].html',
          'pug-html-loader?pretty&exports=false'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src/js"),
      path.resolve(__dirname, "src/styles"),
      path.resolve(__dirname, "src/"),
      "node_modules"
    ],
    extensions: ['.js', '.json', '.jpg', '.png', '.pug', '.jade',
                 '.gif', '.sass', '.scss', '.svg', '.ttf', '.otf']
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets/', to: 'assets' }
    ]),
    extractSass,
  ]
};
