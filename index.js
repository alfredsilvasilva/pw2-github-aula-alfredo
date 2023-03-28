const express = require('express');
 const app = express();

 app.get('/',(req, res)=>{
    res.send('<h1>Ola</h1>')
 })
S
 app.listen(3000, ()=>{
    console.log('Ola mundo' +' servidor  rodando na porta 3000')
 });