var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');



//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();
app.use(bodyParser.json());

let Category = {MANAGER:"Manager", WORKER:"Worker", CUSTOMER:"Customer", SUPPLIER:"Supplier"};


let branches = [ {   id:  123 ,name:"jerusalem Flowers",  active: true , city:'jerusalem' },
    {  id:  456 ,name:"raanana Flowers",  active: false, city:'raanana'}];

    function showLinks(category){
        sendLinks = [];
        switch (category){
            case Category.MANAGER:
                sendLinks.push(links[0]);
            case Category.WORKER:
                sendLinks.push(links[1]);
            case Category.CUSTOMER:
            case Category.SUPPLIER:
                sendLinks.push(links[2]);
            default:
                sendLinks.push(links[3]);
                sendLinks.push(links[4]);
        }
        return sendLinks;
    }
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

//app.use(logger('dev'));
//app.use(express);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

let links = [
	{
		name: "Branch Management",
		id: "branchManagement"
	},
	{
		name: "Users Management",
		id: "userManagement"
	},
	{
		name: "catalog",
		id: "catalog"
	},
	{
		name: "About",
		id: "about"
	},
	{
		name: "Conact Us",
		id: "conactUs"
	}
];



app.get('/', function(req, res) {
    sendLinks = [];
	sendLinks.push(links[3]);
    sendLinks.push(links[4]);
	res.render('home',{links:sendLinks});
});


app.get('/about', function(req, res){
    res.render('about');
});

app.post('/login', function(req, res) 
{
	let userName = req.body.userName;
	let password = req.body.password;
	let userExist = false;
	let isManager = 0;
    let sendLinks = [];
    
	users.forEach(function(user){
		if(user.userName == userName && user.password == password && user.valid == true){
			if(user.category === Category.MANAGER)
				isManager = 1;
			userExist = true;
			sendLinks = showLinks(user.category);
			return;
		}
	});
    res.json({userExist:userExist, links:sendLinks, isManager:isManager});


    
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