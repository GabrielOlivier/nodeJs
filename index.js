const express = require("express");
const { version } = require("os");
const app = express();

app.get("/", function(req, res){
    res.send("Bem Vindo");
})

app.get("/produto", function(req, res){
    res.send("produto");

})
app.get("/produto/:id", function(req, res){
    res.send("/produto id");
})

app.get("/sobre", function(req, res){
    res.status(200).send({
        title:'NodeJs Express Api',
        version: "0.0.1"
    })
})

app.listen(200, function(){
    console.log('Servidor rodando url: http://localhost:2000')
})