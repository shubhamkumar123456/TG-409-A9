// Mongodb --> it is a Nosql data base used to store data in JSON format

// mmongodb commands --> 

// 1) to view all database --> show dbs

// 2) create a new database or switch to any existing databse --> use databaseName

// 3) create a collection inside Database --> db.createCollection('collectionName')

// 4) insert data inside collection -->
    // a)insert single Data --> db.collectionName.insertOne({key :value})
    // b)isert multiple Data --> db.collectionName.insertMany([{} , {} , {}  ,{}])

// Question --> insert 5 data inside product collection 

// 5) get data  --> 
//a) get all data present inside a collection --> db.collectionName.find() 
//b) get single Data only --> db.collectionName.findOne({key :value})

//6) update Data --> 
// a)update single Data --> db.collectionName.updateOne({key:value}  , {$set:{key:value}})
// a)update multiple Data --> db.collectionName.updateMany({key:value}  , {$set:{key:value}})




