const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
      },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',    
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
    ],
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
    ],
  },
};
