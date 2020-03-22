const Sequelize = require("sequelize")
const sequelize = new Sequelize('test','root','',{
    host: "localhost",
    dialect: "mysql"  
})

sequelize.authenticate().then(()=>{
    console.log("huehuehue")
}).catch((erro)=>{
    console.log(erro)
})