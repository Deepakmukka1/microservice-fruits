const express=require('express')
const fruits=require('../database/fruits.json')
const app=express()
app.get('/',(req,res)=>{
    res.json("Welcome to the fruits database")
})

app.get('/fruits/:fruitname',(req,res)=>{
    const fruitName=req.params.fruitname
    const fruitDetails=fruits.filter((fruit)=>{
           return fruit.name.toLowerCase()===fruitName.toLowerCase()
    })
    fruitDetails.length==0 ? res.status(404).send(`${fruitName} not found in database :(`) : res.status(200).send(fruitDetails)
})

module.exports.app=app