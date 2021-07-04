const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const prod = process.env.NODE_ENV === "production"

const config = {
    mode: prod ? "production" : "development",
    entry: [
        "./src/index.tsx",
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".json",
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new Dotenv({
            path: './development.env',
            safe: false,
            silent: false,
        }),
    ],
}

if (prod) {

} else {
    config.devServer = {
        port: 3000,
        hot: true,
        open: true,
        compress: true,
        stats: "errors-only",
        overlay: true,
    }
}

module.exports = config;
