const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    port,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: "style-loader"
            }, 
            {
              loader: "sass-loader"
            },
            {
              loader:  "css-loader"
            }
          ]
        },
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/, use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html"
    })
  ]

}
