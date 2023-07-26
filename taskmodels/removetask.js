const { ObjectId } = require("mongodb")
var connect = require("../mongo.js")

function removetask(personid, taskid){
    try{
        var birb = connect()
        birb.collection("tasks").findOneAndDelete(
            {_id: ObjectId(taskid), user_id: personid}
        )
    }catch(err){
        console.log(err)
    }
}

module.exports = {removetask}