exports.showHome = (req,res) => {
    res.render("index",{title: "home"})
}

exports.showContact = (req,res) =>{
    res.render("contact")
}

let courses = [
    {
        name : "HTML",
        cost : 10
    },
    {
        name : "PHP",
        cost : 30
    },
    {
        name : "Javascript",
        cost : 30
    }
]

exports.showCourses = (req,res) =>{
    res.render("courses",{Courses: courses})
}

exports.postContact = (req,res) =>{
    let contactData = req.body
    res.send(`thanks ${contactData.name}, ${contactData.email}`)
}