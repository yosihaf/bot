// server.js
// load the things we need
var express = require('express');
var app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

// the same for about page
app.get('/', function(req, res) {
    res.render('C:\\Users\\yosef.haftke\\Downloads\\bot\\views\\about-me');
});
app.listen(8000);
console.log('8000 is the magic port');
