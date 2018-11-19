var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// Shai

let Category = {MANAGER:"Manager", WORKER:"Worker", CUSTOMER:"Customer", SUPPLIER:"Supplier"};


let branches = [ {   id:  123 ,name:"jerusalem Flowers",  active: true , city:'jerusalem' },
    {  id:  456 ,name:"raanana Flowers",  active: false, city:'raanana'}];


let users = [
    {
        id:302951108,
        name:'Yosef',
        category:Category.MANAGER,
        branchId:123,
        userName:'abc',
        password:'Aa123456',
        valid:true
    },
    {
        id:333222111,
        name:'Shay',
        category:Category.CUSTOMER ,
        userName:'Shay' ,
        password:'abc',
        valid:false
    },
    {
        id:123456789,
        name:'Moshe',
        category:Category.WORKER ,
        userName:'Moshe' ,
        password:'Aa123456',
        valid:true
    },
    {
        id:987654321,
        name:'levi',
        category:Category.CUSTOMER ,
        userName:'levi' ,
        password:'Aa123456',
        valid:true
    }
];
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(logger('dev'));
//app.use(express);
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));




app.get('/', function(req, res) {
    res.render('home');
});

app.get('/manager', function(req, res) {
    res.render('Manager');
});


app.post('/about', function(req, res){
    res.render('about');
});

app.listen(8000);
console.log('8000 is the magic port');



//module.exports = app;


//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/