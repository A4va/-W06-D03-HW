"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
let data = require("./data.json");
app.get('/data', (req, res) => {
    console.log("Get:");
    res.status(200).send("Test");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
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
