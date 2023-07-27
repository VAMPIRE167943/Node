const { ObjectId } = require("mongodb") //Import connection to mongo
var {connect} = require("../mongo.js")

async function updatetask(personid, taskid, rewards){
    try{
        var birb = await connect() //Connect to mongo
        var more_work = await birb.collection("tasks").findOneAndUpdate(
            {_id: new ObjectId(taskid), user_id: personid},
            {$set: rewards},
            {returnOriginal: false}
        ) //Mongodb find and update query to find and update a doc based on specified params
        return more_work
    }catch(err){
        console.log(err)
    }
}

module.exports = {updatetask} //Make it available globally if imported