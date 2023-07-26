//Connection to Mongo
var MongoClient = require("mongodb")

async function connect(client) {
  client = await MongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology: true});
  return client.db("mongooseBase");
}

module.exports = {connect}