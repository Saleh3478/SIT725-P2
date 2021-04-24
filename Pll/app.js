var createError = require('http-errors');
var express = require('express');
var path = require('path');


//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = "mongodb+srv://pii:pii@cluster0.7etuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoDB,{ useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//check connection
db.once('open', function(){
  console.log('connected to MongoDB');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

////////Routes
// router handles
var indexRouter = require('./routes/index');
var chartsRouter = require('./routes/charts');

app.use('/', indexRouter);
app.use('/', chartsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server Has Started! at port " + port);
});
