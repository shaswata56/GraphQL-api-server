const mongoose = require('mongoose');

const initDB = () => {

    const uri = "mongodb+srv://demo:demo@cluster0-nevpd.mongodb.net/angular-heroes?retryWrites=true";

    mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
        if(err)
            console.log('Error', err);
        else
            console.log('connected');
    });
};

module.exports = initDB;
