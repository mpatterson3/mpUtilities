const express = require("express");
const app = express();
const router = express.Router();
var path = require('path');
const fakeDatabase = {
    "Phillip":{job:'professor',pet:'cat.jpg'},
    "John":{job:'professor',pet:'cat.jpg'},
    "Mary":{job:'professor',pet:'cat.jpg'}
};
//app.use(express.static('/public'));
router.use(express.static(path.join(__dirname, 'public')));
router.get('/',function(req,res){
    res.send("home page");
    
});
router.get('/users',function(req,res){
    const allUsers = Object.keys(fakeDatabase);
    res.send(allUsers);
});
router.get('/about',function(req,res){
    res.sendFile("about.html");
    
});
app.use('/',router)
app.listen(3000,()=>{
    console.log("app ready !");
});


