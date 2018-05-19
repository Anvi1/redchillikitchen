const mongoose = require('mongoose');

function connect() {
    mongoose.connect('LOL-WILL-NOT-UPDATE-IN-GIT');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('connected');
    });
}

module.exports = {
    connect
}