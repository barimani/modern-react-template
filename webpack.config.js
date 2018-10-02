const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = env => {

    const environment = (env && env.build_type) ? env.build_type : 'develop';
    console.log('Building for ' + environment);

    return {
        mode: 'production',
        context: resolve(__dirname, 'src'),
        entry: {
            app: './index.js',
        },
        resolve: {
            modules: [resolve(__dirname, 'src'), 'node_modules']
        },
        output: {
            filename: 'js/[name].bundle.js',
            chunkFilename: 'js/[name].bundle.js',
            path: resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader']
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../'
                            }
                        },
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'images/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                inject: true,
                template: resolve(__dirname, 'src/index.html'),
            }),
            new webpack.DefinePlugin({
                BUILD_TYPE: JSON.stringify(environment || 'develop')
            }),
            new MiniCssExtractPlugin({
                filename: "styles/[name].css",
                chunkFilename: "styles/[id].css"
            })
        ]
    };
};
