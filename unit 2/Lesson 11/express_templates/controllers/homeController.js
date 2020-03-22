exports.resWithName = (req,res) =>{
    res.render("index",{name : req.params.meunome})
}

exports.contact = (req,res) =>{
    res.render("contact")
}