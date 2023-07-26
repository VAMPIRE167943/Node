var {connect} = require("../mongo.js")

async function getpeople(){
    try{
        var birb = await connect()
        var people = birb.collection("users").find().toArray()
        return people
    }catch(err){
        console.log(err)
    }
}

module.exports = {getpeople}