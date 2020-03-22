const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    //res.send('home')
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
})

app.listen(3000,()=>{
    console.log("server online")
})