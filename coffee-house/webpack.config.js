/* eslint-disable global-require */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : 'source-map';

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    open: true,
    port: 3000,
    // compress: true,
    // historyApiFallback: true,
  },
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js'),
    menu: path.resolve(__dirname, 'src', 'menu.js'),
  },
  // path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // filename: 'main.js',
    filename: 'js/[name].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'menu.html',
      template: path.resolve(__dirname, 'src', 'menu.html'),
      chunks: ['menu'],
    }),
    new MiniCssExtractPlugin({
      // filename: 'style.css',
      filename: 'style/[name].css',
    }),
  ],
  // mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        // options: {
        //   minimize: true,
        // },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/style/_vars.scss',
                './src/style/_mixins.scss',
                './src/style/_functions.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.wolf2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: devMode
          ? []
          : [
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};
