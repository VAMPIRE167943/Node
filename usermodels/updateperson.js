const { ObjectId } = require("mongodb")
var {connect} = require("../mongo.js") //Import connection to mongo

async function updateperson(personid, ascension){
    try{
        var birb = await connect() //Connect to mongo
        var rebirth = await birb.collection("users").updateOne(
            {_id: new ObjectId(personid)},
            {$set: ascension}
        ) //Mongodb query to update a single doc based on specified param(s)
        return rebirth
    }catch(err){
        console.log(err)
    }
}

module.exports = {updateperson} //Make it available globally if imported