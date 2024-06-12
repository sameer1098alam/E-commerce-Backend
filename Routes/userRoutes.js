const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const userApi = require('../Apis/apiLogin')
//fetch all records
router.get('/find',userApi.userfind)
//insert  data
router.post('/insert',userApi.insert_user)
//update data
router.put('/update',userApi.update_user)
//delete data
router.delete('/delete',userApi.delete_user)
//export router
module.exports = router