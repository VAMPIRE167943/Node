const { ObjectId } = require("mongodb")
var connect = require("../mongo.js")

function updateperson(personid, ascension){
    try{
        var birb = connect()
        birb.collection("users").updateOne(
            {_id: ObjectId(personid)},
            {$set: ascension})
    }catch(err){
        console.log(err)
    }
}

module.exports = {updateperson}