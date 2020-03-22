exports.resWithName = (req,res) =>{
    res.render("index",{name : req.params.meunome})
}