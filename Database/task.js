const mongoose = require('mongoose')

const connectToDB = (URI)=>{
    return mongoose.connect(URI);
}

module.exports= connectToDB