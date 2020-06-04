var webpack = require("webpack");
var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist");
//Copy everything which has been prepared for serving it into dist folder 
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    modules: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "bable-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;