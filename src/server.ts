import express, { Application, Request, Response } from "express";
const app:Application = express();
const port:number = 3000;
let data = require("../data.json")

app.get('/data', (req:Request, res:Response) => {
    console.log("Get:");
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => res.send(json))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// ===

// const express = require("express");
// const app = express();
// const port = 3000;
// let data = require("./data.json")

// const isAuth =(req, res)=> {

//     console.log("isAuth" + req.query);

//     if (req.query.isAuthor == "true") {
//         res.send(`Hello ${req.query.name}`) 
//     }else{
//         res.send(`Hello`)
//     }

// }
// app.get('/user', isAuth, (req, res, next) => {
//     console.log("/user");
//     next()
// })


// app.get('/data', (req, res) => {
//     console.log("Get:");
//     res.status(200).send(data)
// })

// app.post('/data', (req, res) => {
//     console.log("Post:");
//     data.push({name:"Saad"})
//     res.send(data)
// })

// app.put('/data', (req, res) => {
//     console.log("Put:");
//     data.filter(e=> e.name == "Abduallah"? e.name = "Abood": e.name)
//     res.send(data)
// })

// app.delete('/data', (req, res) => {
//     console.log("Delete:");
//     data.filter((e, i)=> e.name == "Rayan"? data.splice(i, 1): e.name)
//     res.send(data)
// })



// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })