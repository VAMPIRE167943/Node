//Imports for everything and anything to to work
var express = require("express")
var bodyParser = require("body-parser")
var cron = require("node-cron")
var {createperson} = require("./usermodels/createperson")
var {updateperson} = require("./usermodels/updateperson.js")
var {getpeople} = require("./usermodels/getpeople.js")
var {getperson} = require("./usermodels/getperson.js")
var {destroyperson} = require("./usermodels/destroyperson.js")
var {maketask} = require("./taskmodels/maketask.js")
var {updatetask} = require("./taskmodels/updatetask.js")
var {removetask} = require("./taskmodels/removetask.js")
var {gettasks} = require("./taskmodels/gettasks.js")
var {gettask} = require("./taskmodels/gettask.js")
var {job} = require("./Kronos/time.js")
var tomorrow = require("date-and-time") //Import date-and-time module

//To initiate express as an app or the entire damn project just refuses to comply :/
var exp = express()
//To parse the request or else big boy errors
exp.use(bodyParser.json())

// CRUD users with REST
//CREATE
exp.post("/api/users", async function(req, res){
    try{
        var {username, first_name, last_name} = req.body
        var newperson = await createperson({
            username,
            first_name,
            last_name
        })
        res.json(newperson)
    }catch(err){
        console.error(err)
    }
})

//UPDATE
exp.patch("/api/users/:id", async function(req, res){
    try{
        var {id} = req.params
        var {first_name, last_name} = req.body
        await updateperson(id, {
            first_name,
            last_name
        })

    }catch(err){
        console.log(err)
    }
})

//READ all
exp.get("/api/users", async function(req, res){
    try{
        var people = await getpeople()
        res.json(people)
    }catch(err){
        console.log(err)
    }
})

//READ single
exp.get("/api/users/:id", async function(req, res){
    try{
        var {id} = req.params
        var human = await getperson(id)
        res.json(human)
    }catch(err){
        console.log(err)
    }
})

//DELETE
//Because why not??
exp.delete("/api/users/:id", async function(req, res){
    try{
        var {id} = req.params
        await destroyperson(id)
        res.end("Kill confirmed")
    }catch(err){
        console.log(err)
    }
})

//CRUD tasks with REST
//CREATE
exp.post("/api/users/:user_id/tasks", async function(req, res){
    try{
        var {user_id} = req.params
        var {name, description, date_time, status} = req.body
        var work = await maketask(user_id, name, description, Date.parse(date_time), status)
        res.json(work)
    }catch(err){
        console.log(err)
    }
})

//UPDATE
exp.patch("/api/users/:user_id/tasks/:task_id", async function(req, res){
    try{
        var {user_id, task_id} = req.params
        var {name, description, date_time, status} = req.body
        var more_work = await updatetask(user_id, task_id,
            {name, description, date_time, status}
        )
        res.json(more_work)
    }catch(err){
        console.log(err)
    }
})

//DELETE
exp.delete("/api/users/:user_id/tasks/:task_id", async function(req, res){
    try{
        var {user_id, task_id} = req.params
        await removetask(user_id, task_id)
    }catch(err){
        console.log(err)
    }
})

//READ single
exp.get("/api/users/:user_id/tasks/:task_id", async function(req, res){
    try{
        var {user_id, task_id} = req.params
        var stalk = await gettask(user_id, task_id)
        res.json(stalk)
    }catch(err){
        console.log(err)
    }
})

//READ all
exp.get("/api/users/:user_id/tasks", async function(req, res){
    try{
        var {user_id} = req.params
        var overseer = await gettasks(user_id)
        res.json(overseer)
    }catch(err){
        console.log(err)
    }
})

//Job scheduler
cron.schedule("* * * * * *", async function(){
    await job()
})


exp.listen(3000, function(){
    console.log("Actually works??? Of course not lol")
})