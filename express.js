const express = require('express');
const hbs = require('hbs');


var app = express();
const port = process.env.PORT||3000;
app.set('view engine','hbs');
app.use(express.static(__dirname+'/help'))
app.get('/',(req,res)=>{
    res.send("Hello Express")
})

app.get('/bad',(req,res)=>
{
    res.send({
       error: 'Unable to serve the request'
    })
})

app.get('/about',(req,res)=>
{
    res.render('about.hbs');
})
app.get('/help',(req,res)=>
{
 res.render('help.hbs');
})
app.listen(port);