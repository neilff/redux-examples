var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');
var cors = require('cors');

var app = express();

app.use(cors());

app.use('/api', proxy(url.parse('http://www.nhl.com/stats/rest/grouped/skaters/season/skatersummary?cayenneExp=seasonId=20142015%20and%20gameTypeId=2')));
app.use('/api2', proxy(url.parse('http://www.nhl.com/stats/rest/grouped/teams/season/teamsummary?cayenneExp=seasonId=20142015%20and%20gameTypeId=2')));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  noInfo: false,
  stats: {
    colors: true
  }
})

server.listen(8081, 'localhost', function() {
  console.log('http://localhost:8081/src');
});
app.listen(8080);
