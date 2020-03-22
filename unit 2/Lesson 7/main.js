const port = 3000
http = require('http')
httpstatus = require('http-status-codes')
route = require('./router')
contentTypes = require("./contentTypes")
utils = require("./utils")

route.get("/",(req,res)=>{
    utils.getFile('views/index.html',res)
})
route.get("/thanks",(req,res)=>{
    utils.getFile('views/thanks.html',res)
})


var server = http.createServer(route.handle).listen(port)
