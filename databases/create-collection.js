let MongoClient = require("mongodb").MongoClient
let url = "mongodb://localhost:27017/"
let collection_name = "customers"

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err
  let database = db.db("testDB")
  database.createCollection(collection_name, (err, res) => {
    if (err) throw err
    console.log(`collection: ${collection_name}, created!`)
    db.close()
  })
})
