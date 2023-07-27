const { ObjectId } = require("mongodb")
var {connect} = require("../mongo.js") //Import connection to mongo

async function removetask(personid, taskid){
    try{
        var birb = await connect() //Connect to mongo
        await birb.collection("tasks").findOneAndDelete(
            {_id: new ObjectId(taskid), user_id: personid}
        ) //Mongodb query to find and delete a doc based on specified params
        return ("Bomb has been planted.")
    }catch(err){
        console.log(err)
    }
}

module.exports = {removetask} //Make it available globally if imported