var connect = require("../mongo.js")

function getpeople(){
    try{
        var birb = connect()
        birb.collection("users").find().toArray()
    }catch(err){
        console.log(err)
    }
}

module.exports = {getpeople}