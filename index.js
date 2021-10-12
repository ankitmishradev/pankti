const express = require('express');
const app = express();
const port = 8080;

const path = require('path');

app.set('view engine','ejs');
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"assets")));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/join',(req,res)=>{
    res.render('join');
})

app.get('/user/:path',(req,res)=>{
    const {path}= req.params;
    res.render(`${path}`);
})

app.listen(port,()=>{
    console.log(`App is running at port: ${port}`);
})