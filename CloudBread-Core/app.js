let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let azureMobileApps = require('azure-mobile-apps');

//require router
let administrator = require("./routes/administrator");
let game = require("./routes/game");
let itemlisting = require("./routes/itemlisting");
let login = require("./routes/login");
let pushalarm = require("./routes/pushalarm");
let signin = require('./routes/signin');
let tableprocedure = require("./routes/tableprocedure");

let app = express();
//hompage : true => instance of Azure-Mobile-Apps for hompage
let mobile = azureMobileApps({homePage:true});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Setup Router
app.use("/admin", administrator);
app.use("/game", game);
app.use("/item", itemlisting);
app.use("/login", login);
app.use("/alarm", pushalarm);
app.use("/sign", signin);
app.use("/table", tableprocedure);

//Azure Mobile Apps Initialization
//Define a table
mobile.tables.add('index');
// Add the mobile API so it is accessible as a Web API
app.use(mobile);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error'+err.status);
});

module.exports = app;
