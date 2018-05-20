const express = require("express");
const app = express();
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>res.sendFile("/index.html"));
app.get('/about',(req,res)=>res.sendFile("/about.html"));
/*
app.get('/contact',(req,res)=>res.sendFile("/contact.html"));
app.get('/register',(req,res)=>res.sendFile("/register.html"));
*/
app.listen(3000,()=>console.log("app ready !"));


