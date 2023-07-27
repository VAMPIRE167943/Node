//Import connection to mongo
var { connect } = require("../mongo.js");
var tomorrow = require("date-and-time")

async function job() {
  try {
    var birb = await connect(); //Connect to mongo
    var time = new Date(); //Gets the current date and time
    var form = tomorrow.format(time, "YYY-MM-DD")
    var pend = await birb.collection("tasks").find({
      status: "pending",
      next_execute_date_time: { $lte: form },
    }).toArray() //Mongodb find query based on status and next_execute_date_time params. Returns a cursor converted to Array

    for (var task of pend) {
      await birb.collection("tasks").updateOne(
        { _id: task._id },
        { $set: { status: "done" } }
      );
      console.log(`Task ${task.name} update to done`);
      console.log("F**k yeah it actually works :D")
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { job }; //Make it available globally if imported