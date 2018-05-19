const mongoose = require('mongoose');
const config = require('./connectionconfig').config;

function connect() {
    mongoose.connect(config.connectionURI);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('connected');
    });
}

module.exports = {
    connect
}