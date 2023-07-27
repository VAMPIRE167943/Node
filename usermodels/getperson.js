const { ObjectId } = require("mongodb")
var {connect} = require("../mongo.js") //Import connection to mongo

async function getperson(id){
    try{
        var birb = await connect() //Connect to mongo
        var person = await birb.collection("users").findOne(
            {_id: new ObjectId(id)}
        ) //Mongodb find query based on user ID
        return person
    }catch(err){
        console.log(err)
    }
}

module.exports = {getperson} //Make it available globally if imported