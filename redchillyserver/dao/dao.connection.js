const mongoose = require('mongoose');
//const config = require('./connectionutil').config;

function connect() {
    let url = 'mongodb://localhost/redchilliDB';
    //mongoose.connect(config.connectionURI);
    mongoose.connect(url);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('connected');
    });
}

module.exports = {
    connect
}