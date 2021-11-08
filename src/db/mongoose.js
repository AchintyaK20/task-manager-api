const mongoose = require('mongoose');

//const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api';

mongoose.connect(process.env.MONGODB_URL, (err) => { // useNewUrlParser & useCreateIndex are no longer necessary.
    if (err) throw err;
    console.log('Connected to MongoDB!');
});