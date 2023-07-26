var connect = require("../mongo.js")

function maketask(personid, rewards){
    try{
        var birb = connect()
        birb.collection("tasks").insertOne({
            user_id: personid,
            ...rewards
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {maketask}