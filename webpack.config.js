//host-app/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
 entry: "./src/index",
 mode: "development",
 devServer: {
   port: 3000,
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)?$/,
       exclude: /node_modules/,
       use: [
         {
           loader: "babel-loader",
           options: {
             presets: ["@babel/preset-env", "@babel/preset-react"],
           },
         },
       ],
     },
     {
       test: /\.css$/i,
       use: ["style-loader", "css-loader"],
     },
   ],
 },

 resolve: {
   extensions: [".js", ".jsx"],
 },
 target: "web",
};