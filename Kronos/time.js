var { connect } = require("../mongo.js"); //Import connection to mongo

async function job() {
  try {
    var birb = await connect(); //Connect to mongo
    var time = new Date(); //Instantiate a Date object from date-and-time module
    var pend = await birb.collection("tasks").find({
      status: "pending",
      date_time: { $lte: Date.parse(time) },
    }).toArray() //Mongodb find query based on status and date_time params. Returns a cursor converted to Array

    for (var task of pend) { //Iterates through the Array and makes changes accordingly
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