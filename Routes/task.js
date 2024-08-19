const express = require("express")
const Router = express.Router()
const {getAllrequest , postRequest , getSingleRequest} = require('../Controllers/task.js')

Router.route('/')
.get(getAllrequest)
.post(postRequest)

Router.route('/:id')
.get(getSingleRequest)

module.exports = Router