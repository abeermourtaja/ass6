const logService=require('./log.service.js')
async function createLogCollectionController(req,res){
    try{
        logService.createLogCollectionService()
        return res.status(201).json({message:'collection created successfully'})

    }
    catch(err){
        return res.status(400).json({message:err})
    }
}
async function insertLogController(req,res){
    try{
        logService.insertLogService(req.body)
        return res.status(201).json({message:'log inserted sucessfully'})

    }
    catch(err){
        console.log(err)
        return res.status(400).json({message:err})
    }
}
module.exports={createLogCollectionController,insertLogController}