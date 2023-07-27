var {connect} = require("../mongo") //Import connection to mongo

async function createperson(stats){
    try{
        var birb = await connect() //Connect to mongo
        await birb.collection("users").insertOne(stats) //Mongodb query that inserst one doc based on specified params
    }catch(err){
        console.error(err)
    }
}

module.exports = {createperson} //Make it available globally if imported