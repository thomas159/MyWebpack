var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var fs = require("fs");
var config = require('./webpack.config.js');
var path = require('path');
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    hot: true,
    filename: config.output.filename,
    compress: true,
    publicPath: config.output.publicPath,
    stats: { colors: true }

});
server.listen(8080, "localhost", function() {});
// server.close();