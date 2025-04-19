const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        all: [
            './modules/header/header.js',
            './modules/body/body.js',
            './modules/footer/footer.js',
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        port: 8564,
        static: path.join(__dirname, 'public'),
        open: true,

        
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: './assets/',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                    }
                ],
            }
        ]
    }
};
