

const express =require("express")

const cors =require("cors")

//Configuration
const app =express()

//Middleware 
app.use(express.json())
app.use(cors())

//Routes
app.get("/", (req, res)=>{
    res.send("Welcome to Budgeting-App-Backend!")
})

//Controller
const transectionsController = require("./contollers/transectionsController.js")
app.use("/transections", transectionsController)

//404 page
app.get("*", (req, res)=>{
    res.json({error: "Page not found"})
})


module.exports= app;