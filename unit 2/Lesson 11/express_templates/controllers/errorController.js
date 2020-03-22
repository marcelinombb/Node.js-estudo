const httpStatus = require("http-status-codes")

exports.respondNoResourseFound = (req,res) =>{
    let errorCode = httpStatus.NOT_FOUND
    res.status(errorCode)
    res.send(`${errorCode} | page not found` )
}

exports.respondInternalError = (error,res,req,next) =>{
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR
    console.log(error.stack)
    res.send("INTERNAL ERROR")
}