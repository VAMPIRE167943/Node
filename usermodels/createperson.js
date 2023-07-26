var {connect} = require("../mongo")

async function createperson(stats){
    try{
        var birb = await connect()
        await birb.collection("users").insertOne(stats)
    }catch(err){
        console.error(err)
    }
}

module.exports = {createperson}
