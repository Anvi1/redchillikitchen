function connect() {
    var mongoose = require('mongoose');
    mongoose.connect('LOL-WILL-NOT-UPDATE-IN-GIT'); // TODO: use env variable to define connection string
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('connected');
    });
}

module.exports = {
    connect
}