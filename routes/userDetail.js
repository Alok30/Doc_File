console.log('inside account');


const hash = require('object-hash'); 


const mongoose=require('mongoose');
const express=require('express');

const router=express.Router();
require('../models/account');
const Data=mongoose.model('Data');

router.post('/getapikey',(req,res)=>{
         const details=req.body;
         console.log(details.email);
         console.log(details.fullName);
          hash=hash(details);
          let dataUser= new Data(details);
          dataUser.apiKey =hash;
          console.log(hash);
          dataUser.save(function(error,data){
                       if(error){
                           ({
                             message : "error while storing"+error.message
                           });
                           return;
                       } 
                       res.status(200).json(data);
                
          })
          
});
module.exports=router;