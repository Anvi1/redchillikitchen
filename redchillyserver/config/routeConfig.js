const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const variableRoutes = require('./routes/variable');

module.exports = function(app){
    app.use('/api/', indexRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/menu', menuRoutes);   
    app.use('/api/order', orderRoutes);
    app.use('/api/projectvariable', variableRoutes);
}

