var connect = require("../mongo.js")

function gettasks(personid){
    try{
        var birb = connect()
        birb.collection("tasks").find({user_id: personid}).toArray()
    }catch(err){
        console.log(err)
    }
}

module.exports = {gettasks}