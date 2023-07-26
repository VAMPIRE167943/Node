var { connect } = require("../mongo.js");

async function job() {
  try {
    var birb = await connect();
    var time = new Date();
    var pend = birb.collection("tasks").find({
      status: "pending",
      next_execute_date_time: { $lte: time },
    });

    var pend = await pend.toArray();

    for (var task of pend) {
      birb.collection("tasks").updateOne(
        { _id: task._id },
        { $set: { status: "done" } }
      );
      console.log(`Task ${task.name} update to done`);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { job };