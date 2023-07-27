//Import connection to mongo
var { connect } = require("../mongo.js");

async function job() {
  try {
    var birb = await connect(); //Connect to mongo
    var time = new Date(); //Create a new Date object
    var pend = birb.collection("tasks").find({
      status: "pending",
      next_execute_date_time: { $lte: time },
    }) //Mongodb find query based on status and next_execute_date_time params. Returns a cursor

    var pend = await pend.toArray(); //Converting Cursor to Array

    for (var task of pend) {
      await birb.collection("tasks").updateOne(
        { _id: task._id },
        { $set: { status: "done" } }
      );
      console.log(`Task ${task.name} update to done`);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { job }; //Make it available globally if imported