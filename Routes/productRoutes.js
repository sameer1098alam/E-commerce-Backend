//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const productApi = require('../Apis/apiProduct')
//fetch all records
router.get("/fetch", productApi.products_all)
//insert a record
router.post("/insert", productApi.insert_product)
//update a record
router.put("/update", productApi.update_product)
//delete a record
router.delete("/delete", productApi.delete_product)

const userApi = require('../Apis/apiLogin')

//router.get('/userfind',userApi.userfind)
//router.post('/insertuser',userApi.insert_user)
//router.put('/updateuser',userApi.update_user)
//router.delete('/deleteuser',userApi.delete_user)
//export router
module.exports = router
