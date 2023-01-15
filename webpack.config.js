const path = require("path");
HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: "/src/index.js",
    output: {
        filename: "main[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "files/[name]-[hash][ext]",
        clean : true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test:  /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: "asset/resource" 
            },
            {
                test: /\.(ttf)$/i,
                type: 'asset/resource',
              },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template:'/src/template.html'})
    ],

}