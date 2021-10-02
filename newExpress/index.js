
const express = require('express')

const app = express()



// it takes 2 arguments which are route & callback function app.get('route','callback function');
app.get('/',(req,res)=>{

res.send("hello form the express ");
})

app.get('/about',(req,res)=>{
    res.send("In the about page");
})

// liten method also takes 2 parametres which are 1) Port Number, 2) call back function 
app.listen(8000,()=>{
    console.log("listening from the port 8000");
})