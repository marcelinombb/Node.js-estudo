exports.sendParams = (req, res) => {
    res.send(req.params.vegetable)
}

exports.homePost = (req, res) => {
    console.log(req.body)
    console.log(req.query)
    res.send("Post com sucesso")
}