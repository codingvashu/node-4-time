const express = require('express')
const router = express.Router();
const usercontroller = require('../controllers/usercontroller')




router.get('/users',(req,res)=>{
    usercontroller.getAllUser(req,res)

})

module.exports = router