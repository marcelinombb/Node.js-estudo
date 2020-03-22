const port = 3000
const express = require("express")
const layouts = require("express-ejs-layouts")
const homeController = require("./controllers/homeController")
const app = express()
 
app.set("view engine","ejs")
app.use(layouts)

app.get("/name/:meunome",homeController.resWithName)

app.listen(port,()=>{
    console.log("servidor rodando na porta 3000")
})