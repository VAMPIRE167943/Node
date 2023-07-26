var connect = require("../mongo.js")

function job(){
    try{
        var birb = connect()
        var time = new Date()
        var pend = birb.collection("tasks").find({
            status: "pending",
            next_execute_date_time: {$lte: time}
        }).toArray()
        for(var task of pend){
            birb.collection("tasks").updateOne(
                {_id: task._id},
                {$set: {status: "done"}}
            )
            console.log(`Task ${task.name} update to done`)
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = {job}