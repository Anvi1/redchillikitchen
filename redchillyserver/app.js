const express = require('express');
const passport = require('passport');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const doaConnect = require('./dao/dao.connection').connect;
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');

const app = express();
const env = `development`;

if (env == 'development') {
    console.log("Dev is cooking!")
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}

doaConnect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/menu', menuRoutes);   
app.use('/api/order', orderRoutes);

module.exports = app;