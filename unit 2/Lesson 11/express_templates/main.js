const port = 3000
const express = require("express")
const layouts = require("express-ejs-layouts")
const homeController = require("./controllers/homeController")
const errorController = require("./controllers/errorController")
const app = express()
//Config
app.set("view engine","ejs")

//Midlewares
app.use(layouts)
app.use(express.static("public"))

//Routes
app.get("/",homeController.contact)
app.get("/name/:meunome",homeController.resWithName)
//error handlers
app.use(errorController.respondNoResourseFound)
app.use(errorController.respondInternalError)

app.listen(port,()=>{
    console.log("servidor rodando na porta 3000")
})