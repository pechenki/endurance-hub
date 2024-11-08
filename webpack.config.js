const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    entry: ["./src/js/main.js", "./src/scss/styles.scss"],  // Include styles.scss as an entry point for dev

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",  // Output JS file
        clean: true,  // Clean the dist folder before every build
    },

    module: {
        rules: [
            // SCSS Loader
            {
                test: /\.scss$/,
                use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader, // Inject styles in dev, extract in prod
                    "css-loader",  // CSS loader
                    "sass-loader",  // Sass loader
                ],
            },
            // HTML Loader
            {
                test: /\.html$/,
                use: ["html-loader"],  // Handle HTML imports
            },
        ],
    },

    plugins: [
        // HTML Webpack Plugin
        new HtmlWebpackPlugin({
            template: "./src/index.html",  // Your HTML template
            filename: "index.html",  // Output HTML file
        }),

        // CSS Extract Plugin (Only in production)
        !isDevelopment && new MiniCssExtractPlugin({ filename: "styles.css" }),  // Extract styles in production
    ].filter(Boolean),  // Remove MiniCssExtractPlugin in dev mode to avoid extracting CSS

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),  // Serve static files from the dist directory
        },
        compress: true,
        port: 9000,
        open: true,  // Open the browser automatically
        hot: true,   // Enable Hot Module Replacement (HMR)
    },

    mode: isDevelopment ? "development" : "production",  // Set mode based on NODE_ENV
};
