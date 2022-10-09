//npm install mongoose

const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce-api');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error is conecting to MongoDB"));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports=db;