const port = 3000
const express = require("express")
const app = express()
const layout = require("express-ejs-layouts")
const homeController = require("./controllers/homeController")
const errorController = require("./controllers/errorController")

app.use(express.urlencoded({
    extended : false
}))
app.use(express.json())

app.set("view engine","ejs")
app.use(layout)

app.get("/",homeController.showHome)
app.get("/courses",homeController.showCourses)
app.get("/contact",homeController.showContact)
app.post("/contact",homeController.postContact)

app.use(errorController.notFound)

app.listen(port,()=>{
    console.log("server on port 3000")
})