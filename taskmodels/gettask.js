const { ObjectId } = require("mongodb")
var connect = require("../mongo.js")

function gettask(personid, taskid){
    try{
        var birb = connect()
        birb.collection("tasks").findOne(
            {_id: ObjectId(taskid), user_id: personid}
        )
    }catch(err){
        console.log(err)
    }
}

module.exports = {gettask}