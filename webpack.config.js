var path = require('path');
var webpack = require('webpack');

var DEV = process.env.NODE_ENV === 'dev';
var PROD = process.env.NODE_ENV === 'prod';

var entry = PROD
    ?   [ './src/index.js' ]
    :   [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
        ];

var plugins = PROD
    ?   []
    :   [ new webpack.HotModuleReplacementPlugin() ];

module.exports = {
    entry: entry,
    plugins: plugins,
    output: {
        path:path.join(__dirname,'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    }
};