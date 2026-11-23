const authorController=require('./author.controller.js')
const express=require('express')
const router=express.Router()
router.post('/collection/authors',authorController.createAuthorCollectionController)
router.post('/authors',authorController.insertAuthorController)
module.exports=router