import mongoose = require('mongoose');

const url = 'mongodb://192.168.1.10:27017/test';

const connectDb = () => {
    mongoose.connect(url)
        .then(() => { console.log('Connected to DB')})
        .catch(err => { console.log(err)});
};

module.exports = connectDb;