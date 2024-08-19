const mongoose = require('mongoose')

const textschema = new mongoose.Schema({
    name:{
        type:String,
        maxlength : [25 ,'you have exceeded the max-length'],
        required : [true , 'you have not entered name']
    },
    emailid : String ,
    number : {
        type:Number,
        maxlength :[10 ]
    },
    company : String ,
    experience : {
        type:Boolean,
        default : false 
    }

})

const apiHandler = mongoose.model('apiHandler',textschema)
module.exports = apiHandler;