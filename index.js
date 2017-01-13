var session = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');

global.args={};
var front = require('./routes/front');
global.hyperAgent = require('./hyperAgent');
global.args.path=path;
global.args.request={};
global.args.root = path.resolve(__dirname);
global.args.fs=fs;
global.args.ejs=ejs;
global.args.toView={};
global.args.waiting_list=[
    {
        "userInParking":false,
        "id":"22",
        "image":"images/default.jpg",
        "name":"Krishna Sharma",
        "date":"987897979",
        "from":"",
        "to":"",
        "security":"7787"
    },
    {
        "userInParking":false,
        "id":"33",
        "image":"images/default.jpg",
        "name":"Fred Afra",
        "date":"987897979",
        "from":"",
        "to":"",
        "security":"7787"
    },
    {
        "userInParking":true,
        "id":"34",
        "image":"images/default.jpg",
        "name":"Daniel few",
        "date":"987897979",
        "from":"",
        "to":"",
        "security":"7787"
    }
];
global.args.configs=require('./resources/configs.json');
var aps = express();
aps.use(bodyParser.json());
aps.use(bodyParser.urlencoded({ extended: false }));
aps.use(cookieParser());
aps.use(session({
  resave: true, 
  saveUninitialized: false, 
  secret: '534522345'
}));
aps.use(express.static(path.join(__dirname, 'assets')));
aps.set('view engine', 'ejs');
aps.set('views', path.join(__dirname, 'views'));
global.aps=aps;
aps.use('/', front);
aps.use(function(req, res, next) { 
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (aps.get('env') === 'development') {
  aps.use(function(err, req, res, next) {
    res.status(err.status || 500); //console.log(req)
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
global.App=require('./core');
module.exports = aps;
aps.listen(3000, '127.0.0.1');