const express = require("express")
const transections = express.Router()
const transectionsArray= require("../models/transections.js")


//Index
transections.get("/", (req, res)=>{
    res.json(transectionsArray)
})

//Show
transections.get("/:arrayIndex", (req, res)=>{
    if(transectionsArray[req.params.arrayIndex]){
        res.json(transectionsArray[req.params.arrayIndex])
    } else {
        res.status(404).redirect("/404")
    }
})

//Create
transections.post("/", (req, res)=>{
    transectionsArray.push(req.body)
    res.json(transectionsArray[transectionsArray.length-1])
})

//Delete
transections.delete("/:arrayIndex", (req, res)=>{
    if(transectionsArray[req.params.arrayIndex]){
        const deletedLog = transectionsArray.splice(req.params.arrayIndex, 1)
        res.json(deletedLog)
    } else {
        res.status(404).redirect("/404")
    }
})



module.exports=transections;