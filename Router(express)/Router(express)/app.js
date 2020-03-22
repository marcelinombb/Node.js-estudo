const express = require("express")
const app = express()

app.get('/', (req, res) => {
  res.send("home")
})

app.get('/users', (req, res) => {
  res.send("Usuarios")
})

app.get("/funcionarios/:cargo/:nome", (req, res) => {
  res.send("Nome: " + req.params.nome + " " + "Cargo: " + req.params.cargo)
})

app.listen(3000, () =>
  console.log("Server on")
)