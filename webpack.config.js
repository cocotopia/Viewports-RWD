module.exports = {
    mode: 'production', //mode: 'development',
    entry: {
        script: "./src/js/index.js"
    },
    output: {
        filename: "./js/index.bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};


// var path = require('path');
//
// module.exports = {
//     entry: 'index',
//     output: {
//         path: path.join(__dirname, 'scripts'),
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             { test: /\.json$/, loader: 'json-loader' }
//         ]
//     },
//     resolve: {
//         extensions: ['', '.webpack.js', '.web.js', '.js']
//     },
//     node: {
//         console: 'empty',
//         fs: 'empty',
//         net: 'empty',
//         tls: 'empty'
//     }
// };