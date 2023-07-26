const { ObjectId } = require("mongodb")
var connect = require("../mongo.js")

async function getperson(id){
    try{
        var birb = await connect()
        var person = await birb.collection("users").findOne(
            {_id: ObjectId(id)}
        )
        return person
    }catch(err){
        console.log(err)
    }
}

module.exports = {getperson}