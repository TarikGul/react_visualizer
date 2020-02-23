const path = require('path');
module.exports = {
  context: __dirname,
  entry: './frontend/index.jsx', // specifies where webpack will start looking
  output: {
    path: path.resolve(__dirname),
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    alias: {
        com: path.resolve(__dirname, "frontend/components"),
        css: path.resolve(__dirname, "frontend/css"),
        js: path.resolve(__dirname, "frontend/js")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/, //a regular expression that tests what kind of files to run through this loader.
        exclude: /(node_modules)/, //ignore these files
        use: {
          loader: 'babel-loader', //the name of the loader we are going to use (babel-loader).
          query: {
            // options for the loader
            presets: ['@babel/env', '@babel/react'] //transpile back to es 5 and convert jsx code
          }
        },
      }
    ]
  },
  devtool: 'source-map',
};
