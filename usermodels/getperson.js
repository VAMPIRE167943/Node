const { ObjectId } = require("mongodb")
var connect = require("../mongo.js")

function getperson(id){
    try{
        var birb = connect()
        var person = birb.collection("users").findOne(
            {_id: ObjectId(id)}
        )
        return person
    }catch(err){
        console.log(err)
    }
}

module.exports = {getperson}