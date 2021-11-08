//CRUD create read update delete
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
// const {MongoClient, ObjectId} = require('mongodb'); // Another way of destructuring objects.

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser : true}, function(error, client) {
    if (error) {
        return console.log('Unable to connect to database.');
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectId("615aeec7b11ec3777594ff7c")
    // }, {
    //     $inc : {
    //         age : 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').deleteMany({
    //     age : 22
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').deleteOne({
    //     name : 'Amod'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').insertMany([  // Using callbacks
    //     {
    //         name : 'Achintya',
    //         age : 22
    //     }, 
    //     {
    //         name : 'Gaurav',
    //         age : 21
    //     },
    //     {
    //         name : 'Amod',
    //         age : 21
    //     }
    // ], function(error, result) {
    //     if (error) {
    //         return console.log('Unable to insert documents.');
    //     }
    //     console.log(result.insertedCount);
    // });

    // db.collection('users').insertMany([    // Using Promises
    //     {
    //         name : 'Achintya',
    //         age : 22
    //     }, 
    //     {
    //         name : 'Gaurav',
    //         age : 21
    //     },
    //     {
    //         name : 'Amod',
    //         age : 21
    //     }
    // ]).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection('users').insertOne({
        name : 'Mihir',
        age : 23
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert.')
        }
        console.log(result)
    })
});
