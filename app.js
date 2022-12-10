// Requiring module
const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

// Creating express object
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Handling GET request
app.get('/',(req,res) => {
    res.send('A simple Node App is ' + 'running on this server')
    res.end()
})

// Handling GET request
app.get('/retorno',(req,res) => {
    res.send('Rodando uma api utilizando o método GET')
    res.end()
})

// Consultando dados utilizando método GET
app.get('/cliente',(req,res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from cliente',res);
});  

// Consultando dados com id utilizando método GET
app.get('/cliente/:id',(req,res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from cliente where id='+ req.params.id, res);
}); 

// Alterando dados utilizando método PUT
app.put('/cliente/:id', (req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update cliente set nome='" + req.body.nome+"' where id=" +req.params.id, res);
});

// Incluindo dados utilizando método POST
app.post('/cliente/', (req,res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into cliente (nome) value('"+req.body.nome+"')",res);
});

// Deletando dados utilizando método DELETE
app.delete('/cliente/:id', (req,res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from cliente where id=" + req.params.id, res);
});

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup 
app.listen(PORT,console.log(`Server started on port ${PORT}`))