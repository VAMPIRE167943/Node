const moment = require("moment/moment.js"); //moment library tops date-and-time
var { connect } = require("../mongo.js"); //Import connection to mongo

async function job() {
  try {
    var birb = await connect(); //Connect to mongo
    var time = moment(); //Initiate moment library to make it usable
    var pend = await birb.collection("tasks").find({
      status: "pending",
      date_time: { $lte: time.format() },
    }).toArray() //Mongodb find query based on status and date_time params. Returns a cursor converted to Array

    for (var task of pend) { //Iterates through the Array and makes changes accordingly
      await birb.collection("tasks").updateOne(
        { _id: task._id },
        { $set: { status: "done" } }
      );
      console.log(`Task ${task.name} update to done`);
      console.log("F**k yeah it actually works.......this time :D")
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { job }; //Make it available globally if imported