// mongosh
// Current Mongosh Log ID: 68c3bed60fcdcf7d6f4eeb85
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.7
// Using MongoDB:          8.0.4
// Using Mongosh:          2.3.7
// mongosh 2.5.8 is available for download: https://www.mongodb.com/try/download/shell

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


// myNewDatabase> db.createCollection("Courses")
// { ok: 1 }
// myNewDatabase> show collections
// Courses
// myNewDatabase> db.Courses.drop()
// true
// myNewDatabase> show collections

// myNewDatabase> db.createCollection("Courses")
// { ok: 1 }
// myNewDatabase> show collections
// Courses
// myNewDatabase> db.Courses.insertOne({title:"Complete Backend Course" , price:"9999"})
// {
//   acknowledged: true,
//   insertedId: ObjectId('68c3c07e0fcdcf7d6f4eeb86')
// }
// myNewDatabase> db.dropDatabase();
// { ok: 1, dropped: 'myNewDatabase' }
// myNewDatabase> show collections

// myNewDatabase> db.createCollection("Courses")
// { ok: 1 }
// myNewDatabase> show collections
// Courses
// myNewDatabase> db.dropDatabase();
// { ok: 1, dropped: 'myNewDatabase' }
// myNewDatabase> show collections

// myNewDatabase> use myNewDatabase
// already on db myNewDatabase
// myNewDatabase> db.Courses.insertMany(
// ... [
// ... {"title":"C#" , "price":7999 , rating:9},
// ... {"title":"JS" , "price":9999 , rating:10}
// ... ]
// ... )
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('68c3c2800fcdcf7d6f4eeb87'),
//     '1': ObjectId('68c3c2800fcdcf7d6f4eeb88')
//   }
// }