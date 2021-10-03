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
    res.send(fruitDetails)
})

module.exports.app=app