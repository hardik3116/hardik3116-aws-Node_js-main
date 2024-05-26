const express = require("express");
const app = express();
require("dotenv").config()

app.get('/api/get',(req,res) => {
    res.send({message:"hello Hardik Welcome to nodejs project "})
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"hardik",
            lstname: "bunny",
            contact:12254
        },env:process.env.NAME
    })
});


app.listen(process.env.PORT,() => {
    console.log("listening to 8000");
})