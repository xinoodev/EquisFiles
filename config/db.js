require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Base de datos conectada.');
    }).catch(err => {
        console.log('Fallo al conectar la base de datos.');
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;