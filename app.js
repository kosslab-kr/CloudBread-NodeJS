const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const azureMobileApps = require('azure-mobile-apps');

const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const errorHandler = require('errorhandler');

// require router
// const administrator = require('./routes/administrator');
// const game = require('./routes/game');
// const itemlisting = require('./routes/itemlisting');
// const login = require('./routes/login');
// const pushalarm = require('./routes/pushalarm');
// const signin = require('./routes/signin');
// const tableprocedure = require('./routes/tableprocedure');
const api = require('./routes/api');

const app = express();
// hompage : true => instance of Azure-Mobile-Apps for hompage
const mobile = azureMobileApps({ homePage: true });

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());
app.use(expressStatusMonitor());
app.use(errorHandler());

// Setup Router
// app.use('/admin', administrator);
// app.use('/game', game);
// app.use('/item', itemlisting);
// app.use('/login', login);
// app.use('/alarm', pushalarm);
// app.use('/sign', signin);
// app.use('/table', tableprocedure);
app.use('/api', api);

// Azure Mobile Apps Initialization
// Define a table
mobile.tables.add('index');
// Add the mobile API so it is accessible as a Web API
app.use(mobile);

module.exports = app;
