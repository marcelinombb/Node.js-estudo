const express = require("express")
const homecontroller = require("./controllers/homeController")
const app = express()

app.use(express.urlencoded({
    extended : false
}))

app.use(express.json())

app.use((req, res, next) => {
    console.log(`request made by ${req.url}`)
    console.log(req.query)
    next()
})

app.get("/item/:vegetable",homecontroller.sendParams)

app.post("/",homecontroller.homePost)

app.listen(3001,()=>{
    console.log("server on port 3001")
})