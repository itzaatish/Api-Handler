require('dotenv').config({path :'../.env'})
const apiHandler = require('../models/task.js')
const connectToDB = require('../Database/task.js')
const fakeData = require('../data.js')
console.log(process.env.URI)
const dataAdder = async()=>{
    try {
        await connectToDB(process.env.URI);
        const data = apiHandler.create(fakeData.data)
        console.log('data Added')

    } catch (error) {
        console.log(error)
    }
}
dataAdder()