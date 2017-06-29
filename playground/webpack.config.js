/* eslint-disable */
var webpack = require("webpack");
var path = require("path");
var resolve = path.resolve;
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = env => {
  var addPlugin = (add, plugin) => (add ? plugin : undefined);
  var ifProd = plugin => addPlugin(env.prod, plugin);
  var removeEmpty = array => array.filter(i => !!i);

  return {
    entry: {
      main: ["babel-polyfill", "./index.js"]
    },
    output: {
      filename: "[name].[chunkhash].js",
      path: resolve(__dirname, "dist"),
      pathinfo: !env.prod,
      publicPath: "/"
    },
    context: resolve(__dirname, "src"),
    devtool: env.prod ? "source-map" : "eval",
    bail: env.prod,
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: [/node_modules/]
        },
        {
          test: /\.example$/,
          loader: "raw-loader"
        }
      ]
    },
    devServer: {
      open: true,
      historyApiFallback: true,
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 8080
    },
    plugins: removeEmpty([
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: module =>
          module.context &&
          module.context.indexOf("node_modules") !== -1 &&
          module.context.indexOf("babel-polyfill") === -1
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: require("html-webpack-template"),
        appMountId: "root",
        devServer: env.dev && "http://localhost:8080",
        mobile: true,
        links: ["https://fonts.googleapis.com/css?family=Roboto"],
        title: "react-styled-ui playground"
      }),
      ifProd(
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false,
          quiet: true
        })
      ),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(ifProd("production") || "development")
        }
      }),
      ifProd(
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            screw_ie8: true,
            warnings: false
          }
        })
      ),
      ifProd(
        new CompressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
      )
    ])
  };
};
