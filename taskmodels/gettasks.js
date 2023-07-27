var {connect} = require("../mongo.js") //Import connection to mongo

async function gettasks(personid){
    try{
        var birb = await connect() //Connect to mongo
        var overseer = birb.collection("tasks").find({user_id: personid}).toArray() //Mongodb find query based on user ID and converted to Array
        return overseer
    }catch(err){
        console.log(err)
    }
}

module.exports = {gettasks} //Make it available globally if imported