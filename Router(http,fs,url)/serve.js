var http =  require('http');
var url = require("url");
var fs = require("fs")

var server  = http.createServer(function (request,response) {
    var result = url.parse(request.url, true).pathname
    var arquivo = __dirname+result+".html"

    if (result == '/') {
        arquivo = __dirname+"/artigos.html"
    }
    
    if (!fs.existsSync(arquivo)) {
        arquivo = __dirname+"/erro.html"
    }

    fs.readFile(arquivo,function (err,html) {
        response.writeHead(200, {"Content-Type": "text/html"})
        response.end(html)
    })
})

server.listen(3001,function () {
    console.log("server on")
})
