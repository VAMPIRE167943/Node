var {connect} = require("../mongo.js") //Import connection to mongo

async function getpeople(){
    try{
        var birb = await connect() //Connect to mongo
        var people = birb.collection("users").find().toArray() //Mongodb find query to retrieve all docs and convert to Array
        return people
    }catch(err){
        console.log(err)
    }
}

module.exports = {getpeople} //Make it available globally if imported