const { ObjectId } = require("mongodb")
var connect = require("../mongo.js")

async function destroyperson(personid){
    var birb = connect()
    await birb.collection("users").findOneAndDelete(
        {_id: ObjectId(personid)}
    )
}

module.exports = {destroyperson}