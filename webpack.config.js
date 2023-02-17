const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BUILD_HTML_PATH = "./public/index.html";
const joinPath = (suffix) => path.resolve(__dirname, suffix);

module.exports = {
  // As we already define alias and enforceExtention in below
  entry: "src/index",
  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: joinPath("dist"),
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
    // If it's true then you have to put extention forcefully
    enforceExtension: false,
    // Create an alias for src to use relative path into our project
    alias: {
      src: joinPath("src/"),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: BUILD_HTML_PATH,
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: "main.css",
      chunkFilename: "main.chunk.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /[\.js|\.jsx]$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // We can define presets into the .babelrc file. Cause -
          // When we state that we’re using babel-loader in your webpack config, it will look for .babelrc file if there is one.
          // options: {
          //   presets: ["@babel/preset-env", "@babel/preset-react"],
          // },
        },
      },
      // // If we don't want to customise our css module and it's IdentityName
      // {
      //   test: /\.css/,
      //   // This below code will not work (get Module build failed), as webpack start
      //   // looking loader from last. So, it will try to use style-loader for importing
      //   // App.css module. So, the general flow is to load all css module by css-loader
      //   // first and then style-loader will add the style into the HTML(index.html).

      //   // use: ["css-loader", "style-loader"],

      //   // So, we have to write in below way,
      //   use: ["style-loader", "css-loader"],
      // },

      // To customise css with a unique Identification, we can pass options for css-module, will be loaded by css-loader.
      {
        test: /\.css/,
        use: [
          // It use to add css into the bundle.js file
          // {
          //   loader: "style-loader",
          // },

          // It use to add css as a separate .css file
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                // After v3.0.0 comes inside module, helps to give unique Identification
                localIdentName: "[name]_[local]_[hash:base64]",
              },
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
