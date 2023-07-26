var connect = require("../mongo.js")

function destroyperson(){
    var birb = connect()
    birb.collection("users")
}

module.exports = {destroyperson}