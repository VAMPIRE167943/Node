var {connect} = require("../mongo.js") //Import connection to mongo

async function maketask(personid, taskname, taskdesc, date, state){
    try{
        var birb = await connect() //Connect to mongo
        var work = await birb.collection("tasks").insertOne({
            user_id: personid,
            name: taskname,
            description: taskdesc,
            date_time: date,
            status: state
        }) //Mongodb insert query to insert a doc with specified params
        return work
    }catch(err){
        console.log(err)
    }
}

module.exports = {maketask} //Make it available globally if imported