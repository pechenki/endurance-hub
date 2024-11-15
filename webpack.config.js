const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    entry: ["./src/js/main.js", "./src/scss/styles.scss"],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true, // Clean dist folder before every build
        // assetModuleFilename: "assets/[name][ext][query]", // Path for assets and other assets
    },

    module: {
        rules: [
            // SCSS Loader
            {
                test: /\.scss$/,
                use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            // HTML Loader
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            // Image Loader (for dynamic image processing)
            {
                test: /\.(png|jpe?g|gif|svg|mp4)$/i,
                type: 'asset/resource', // Use Webpack's asset module
                generator: {
                    filename: 'assets/[name].[hash:8][ext]', // Path and name for output assets
                },
            },
            {
                test: /\.(woff|woff2|ttf)$/i,
                type: 'asset/resource', // Use Webpack's asset module
                generator: {
                    filename: 'fonts/[name].[hash:8][ext]', // Path and name for output fonts
                },
            },
        ],
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                },
                {
                    from: path.resolve(__dirname, 'src/fonts'),
                    to: path.resolve(__dirname, 'dist/fonts'),
                },
                {
                    from: path.resolve(__dirname, 'src/js/jquery-3.7.1.min.js'),
                    to: path.resolve(__dirname, 'dist/js/jquery.min.js'),
                },
                {
                    from: path.resolve(__dirname, 'src/js/bootstrap.bundle.min.js'),
                    to: path.resolve(__dirname, 'dist/js/bootstrap.bundle.min.js'),
                },
                {
                    from: path.resolve(__dirname, 'src/js/slick.min.js'),
                    to: path.resolve(__dirname, 'dist/js/slick.min.js'),
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: true,
        }),
        !isDevelopment && new MiniCssExtractPlugin({ filename: "styles.css" }),
    ].filter(Boolean),

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
        open: true,
        hot: true, // Enable Hot Module Replacement (HMR)
        watchFiles: {
            paths: ["src/assets/**/*", "src/scss/**/*", "src/**/*.html"], // Watch changes to assets
        },
        devMiddleware: {
            writeToDisk: true, // Force assets and other assets to be written to disk
        },
    },

    mode: isDevelopment ? "development" : "production",
};
