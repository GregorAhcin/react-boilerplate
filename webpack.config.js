const path = require("path");

module.exports = env => {
  return {
    mode: "development",
    entry: env === "hooks" ? "./src/scripts/app-hooks.js" : "./src/app.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
      port: 5500,
      contentBase: path.resolve(__dirname, "public")
    }
  };
};
