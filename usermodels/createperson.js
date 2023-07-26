var connect = require("../mongo")

function createperson(stats){
    try{
        var birb = connect()
        birb.collection("users").insertOne(stats)
    }catch(err){
        console.log(err)
    }
}

module.exports = {createperson}