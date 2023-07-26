//Imports for everything and anything to to work
var express = require("express")
var bodyParser = require("body-parser")
var cron = require("node-cron")
var createperson = require("./usermodels/createperson.js")
var updateperson = require("./usermodels/updateperson.js")
var getpeople = require("./usermodels/getpeople.js")
var getperson = require("./usermodels/getperson.js")
var destroyperson = require("./usermodels/destroyperson.js")
var maketask = require("./taskmodels/maketask.js")
var updatetask = require("./taskmodels/updatetask.js")
var removetask = require("./taskmodels/removetask.js")
var gettasks = require("./taskmodels/gettasks.js")
var gettask = require("./taskmodels/gettask.js")
var job = require("./Kronos/time.js")

//To initiate express as an app or the entire damn project just refuses to comply :/
var exp = express()
//To parse the request or else big boy errors
exp.use(bodyParser.json())

//CRUD users with REST
exp.post("/api/users", function(req, res){
    try{
        var {username, firstname, lastname} = req.body
        createperson({
            username,
            firstname,
            lastname
        })
    }catch(err){
        console.log(err)
    }
})

exp.patch("/api/users/:id", function(req, res){
    try{
        var {id} = req.params
        var {firstname, lastname} = req.body
        updateperson(id, {
            firstname,
            lastname
        })
    }catch(err){
        console.log(err)
    }
})

exp.get("/api/users", function(req, res){
    try{
        getpeople()
    }catch(err){
        console.log(err)
    }
})

exp.get("/api/users/:id", function(req, res){
    try{
        var {id} = req.params
        getperson(id)
    }catch(err){
        console.log(err)
    }
})

//Because why not??
exp.delete("/api/users/:id", function(req, res){
    try{

    }catch(err){
        console.log(err)
    }
})

//CRUD tasks with REST
exp.post("/api/users/user_id/tasks", function(req, res){
    try{
        var {user_id} = req.params
        var {name, description, date_time} = req.body
        maketask(user_id, {name, description, date_time})
    }catch(err){
        console.log(err)
    }
})

exp.patch("/api/users/user_id/tasks/task_id", function(req, res){
    try{
        var {user_id, task_id} = req.params
        var {name, description, date_time} = req.body
        updatetask(user_id, task_id,
            {name, description, date_time}
        )
    }catch(err){
        console.log(err)
    }
})

exp.delete("/api/users/user_id/tasks/task_id", function(req, res){
    try{
        var {user_id, task_id} = req.params
        removetask(user_id, task_id)
    }catch(err){
        console.log(err)
    }
})

exp.get("/api/users/user_id/tasks/task_id", function(req, res){
    try{
        var {task_id, user_id} = req.params
        gettask(task_id, user_id)
    }catch(err){
        console.log(err)
    }
})

exp.get("/api/users/user_id/tasks", function(req, res){
    try{
        var {user_id} = req.params
        gettasks(user_id)
    }catch(err){
        console.log(err)
    }
})

//Job scheduler
cron.schedule("* * * * *", function(){
    console.log("Running")
    job()
})


exp.listen(3000, function(){
    console.log("Actually works??? Of course not lol")
})