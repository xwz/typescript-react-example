var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "./build/[name].js"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {
                // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                // Extract css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                // Extract less css files and create source maps
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css?sourceMap!" + "less?sourceMap")
            }
        ],

        preLoaders: [
            {
                // All output '.js' files will have any source maps re-processed by 'source-map-loader'.
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("./build/[name].css")
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};