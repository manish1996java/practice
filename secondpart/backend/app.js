const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const userroutes = require('./routes/user');



const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    next();
})

mongoose.connect('mongodb+srv://Manish:E5SEMEKst2yoNfWe@cluster0-puvlp.mongodb.net/bookshop?retryWrites=true&w=majority',{ useUnifiedTopology: true }).then(()=>{
    console.log("connect to database");
}).catch((err)=>{
    console.log(err);
})



app.use('/user',userroutes)
app.use('/abc',(req,res,next)=>{
    console.log('singup');
})
app.use('',()=>{
    console.log('blank');
})

module.exports = app;