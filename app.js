require("dotenv").config()
const express = require("express")
const app = express()
const routes = require('./Routes/task.js')
const connectToDB = require('./Database/task.js')

app.get('/',(req,res)=>{
    res.status(200).send("server created succesfully")
})

app.use('/candidates',routes)
port = 5500;

const start = async()=>{
    try {
        await connectToDB(process.env.URI)
        app.listen(port, ()=>{console.log(`server is listening at port ${port} ...`)})
    } catch (error) {
        console.log(error)
    }
}
start();
