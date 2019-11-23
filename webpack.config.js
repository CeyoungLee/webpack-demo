const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'build') //예약어 사용
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};