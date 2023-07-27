const { ObjectId } = require("mongodb")
var {connect} = require("../mongo.js") //Import connection to mongo

async function gettask(personid, taskid){
    try{
        var birb = await connect() //Connect to mongo
        var spec = await birb.collection("tasks").findOne(
            {_id: new ObjectId(taskid), user_id: personid}
        ) //Mongodb find query based on task and user IDs
        return spec
    }catch(err){
        console.log(err)
    }
}

module.exports = {gettask} //Make it available globally if imported