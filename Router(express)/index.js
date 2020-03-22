const Sequelize = require("sequelize")
const sequelize = new Sequelize('test','root','',{
    host: "localhost",
    dialect: "mysql"  
})

sequelize.authenticate().then(()=>{
    console.log("suamae huehuehue")
}).catch((erro)=>{
    console.log(erro)
})