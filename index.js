const express=require('express');
const dotenv=require('dotenv').config();
//adding
const port=process.env.PORT || 8000;
const app=express();

const db=require('./config/mongoose');

app.use(express.urlencoded({extended:true}));
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(err,"error");
    }
    console.log(`Server running on port: ${port}`);
});




