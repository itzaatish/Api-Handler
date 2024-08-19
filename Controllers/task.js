const express = require("express")
const app = express()
const apiHandler = require("../models/task.js")
const { data } = require("../data")
const getAllrequest = async(req,res)=>{
    try {
        // console.log(req.query)

        const {name , company , experience , sort , select , page} = req.query
        let queryObj = {}
        if(name){
            queryObj.name = { $regex: name , $options: 'i'}
        }
        if(company){
            queryObj.company = company
        }
        if(experience){
            queryObj.experience = experience === "true"? true : false
        }
        if(sort){
            req.query.sort = sort.split(',').join(" ")
            // console.log(queryObj.sort)
        }
        if (select){
            req.query.select = select.split(',').join(" ")
        }
        // skip->this will be calculated  page->this we will get from page  limit->this we will hardcode
        const page_doc = 5;
        const skip = (page-1)*page_doc;
        // console.log(queryObj)
        const results = apiHandler.find(queryObj)
        results.sort(req.query.sort)
            .select(req.query.select)
            .limit(page_doc)
            .skip(skip)
        // const raim = data_getAll.map((value)=>{value})
        data_getAll = await results;
        res.status(200).send(data_getAll)
    } catch (error){
        console.log(error)
    }
}

const postRequest = async(req,res)=>{
    try {
        res.send('this is suppose to take post request')
    } catch (error) {
        console.log(error)
    }
}

const getSingleRequest = async(req,res)=>{
    try {
        res.send('this is suppost to send a single response')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllrequest , postRequest , getSingleRequest}