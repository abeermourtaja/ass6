const logController=require('./log.controller.js')
const express=require('express')
const router=express.Router()
router.post('/collection/logs/capped',logController.createLogCollectionController)
router.post('/logs',logController.insertLogController)
module.exports=router;