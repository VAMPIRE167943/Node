const { ObjectId } = require("mongodb")
var {connect} = require("../mongo.js") //Import connection to mongo

async function destroyperson(personid){
    try{
        var birb = await connect() //Connect to mongo
        await birb.collection("users").findOneAndDelete(
            {_id: new ObjectId(personid)}
        ) //Mongodb query to find and delete a doc based on specified params
        return ("Counter Terrorists Win.")
    }catch(err){
        console.log(err)
    }
}

module.exports = {destroyperson} //Make it available globally if imported