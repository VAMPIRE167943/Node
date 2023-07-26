const { ObjectId } = require("mongodb")
var connect = require("../mongo.js")

function updatetask(personid, taskid, rewards){
    try{
        var birb = connect()
        birb.collection("task").findOneAndUpdate(
            {_id: ObjectId(taskid), user_id: personid},
            {$set: rewards},
            {returnOriginal: false}
        )
    }catch(err){
        console.log(err)
    }
}

module.exports = {updatetask}