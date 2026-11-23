const authorService=require('./author.service.js')
async function createAuthorCollectionController(req,res){
    try{
        authorService.createAuthorCollectionService()
        return res.status(201).json({message:'collection created sucessfuly'})

    }
    catch(err){
        return res.status(400).json({message:err})
    }
}
async function insertAuthorController(req,res){
    try{
        authorService.insertAuthorService(req.body)
        return res.status(201).json({message:'author inserted sucessfully'})
    }
    catch(err){
        return res.status(400).json({message:err})
    }
}
module.exports={createAuthorCollectionController,insertAuthorController}