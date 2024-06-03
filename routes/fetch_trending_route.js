const express=require('express')
const controler = require('../controllers/controler')

const router= express.Router()

router.get('/get-trendings', controler)

module.exports=router