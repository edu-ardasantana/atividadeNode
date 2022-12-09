// Requiring module
const express = require('express');

// Creating express object
const app = express();

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

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup 
app.listen(PORT,console.log(`Server started on port ${PORT}`))