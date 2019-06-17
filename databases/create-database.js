let mongo = require("mongodb")
let MongoClient = require("mongodb").MongoClient
// must first create a MongoClient object and specify a connection URL with the correct ip address of the database.
// mongoDB will create a database of it does not exist and creata conneciton to it
let dbname = "testDB"
let url = `mongodb://localhost:27017/${dbname}`
MongoClient.connect({ useNewUrlParser: true }, url, (err, db) => {
  if (err) {
    console.log(`there has been an error: ${err}`)
    throw err
  } else {
    console.log(`database: ${dbname}, created at url ${url}`)
    db.close()
  }
})
