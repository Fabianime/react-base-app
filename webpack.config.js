const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

// eslint-disable-next-line import/no-dynamic-require
const packageJson = require(path.resolve(process.cwd(), 'package.json'));
const packageName = packageJson.name.replace(/@/, '-').replace(/\//, '-');
const version = packageJson.version.toLowerCase().trim();

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@views': path.resolve(__dirname, 'src/views/'),
    },
    fallback: {
      path: require.resolve('path-browserify'),
      child_process: false,
      fs: false,
      net: false,
      tls: false,
      dns: false,
      os: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          'css-modules-typescript-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              esModule: true,
              modules: {
                localIdentName: '[path][name]__[local]--[contenthash]',
                exportLocalsConvention: 'camelCase',
                exportOnlyLocals: false,
              },
            },
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: `${packageName}_${version}.[contenthash].css`,
    }),
    new SourceMapDevToolPlugin({
      filename: 'sourcemaps/[file].map',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
