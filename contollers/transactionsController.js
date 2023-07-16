const express = require("express")
const transactions = express.Router()
const transactionsArray= require("../models/transactions.js")


//Index
transactions.get("/", (req, res)=>{
    res.json(transactionsArray)
})

//Show
transactions.get("/:arrayIndex", (req, res)=>{
    if(transactionsArray[req.params.arrayIndex]){
        res.json(transactionsArray[req.params.arrayIndex])
    } else {
        res.status(404).redirect("/404")
    }
})

//Create
transactions.post("/", (req, res)=>{
    transactionsArray.push(req.body)
    res.json(transactionsArray[transactionsArray.length-1])
})

//Delete
transactions.delete("/:arrayIndex", (req, res)=>{
    if(transactionsArray[req.params.arrayIndex]){
        const deletedLog = transactionsArray.splice(req.params.arrayIndex, 1)
        res.json(deletedLog)
    } else {
        res.status(404).redirect("/404")
    }
})

//Update
transactions.put("/:id", (req, res) => {
    if (transactionsArray[req.params.id]) {
      transactionsArray[req.params.id] = req.body;
      res.status(200).json(transactionsArray[req.params.id])
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

module.exports=transactions;