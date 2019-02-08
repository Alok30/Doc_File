const mongoose=require('mongoose');


const dataSchema=new mongoose.Schema({

   email:{
       type: String,
       required : true
   },
    fullName : {
        type : String,
        required : true
    },
    apiKey : {
        type : String,
        required : true
    }



})

mongoose.model('Data',dataSchema);