const { ObjectId } = require("mongodb")
var connect = require("../mongo.js")

function destroyperson(personid){
    var birb = connect()
    birb.collection("users").findOneAndDelete(
        {_id: ObjectId(personid)}
    )
}

module.exports = {destroyperson}