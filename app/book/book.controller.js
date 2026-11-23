const { getBooks } = require('./book.repository.js')
const bookService=require('./book.service.js')
async function createBookCollectionController(req,res){
    try{
        bookService.createBookCollectionService()
        return res.status(201).json({message:'collection created sucessfuly'})

    }
    catch(err){
        return res.status(400).json({message:err})
    }
}
async function createIndexBookController(req,res){
    try{
        bookService.creatIndexBookService()
        return res.status(201).json({message:'index of title created sucessfuly'})

    }
    catch(err){
        return res.status(400).json({message:err})
    }
}
async function insertBookController(req,res){
    try{
        await bookService.insertBookService(req.body)
        return res.status(201).json({message:'book inserted sucessfuly'})

    }
    catch(err){
        return res.status(400).json({message:err})
    }
}
async function insertBooksController(req,res){
    try{
        if (!Array.isArray(req.body)) {
            return res.status(400).json({message:'Request body must be an array of books'})
        }
        await bookService.insertBooksService(req.body)
        return res.status(201).json({message:'books inserted sucessfully'})
    }
    catch(err){
        return res.status(400).json({message:err})
    }
}
async function getBooksController(req,res){
    try{
        const books = await bookService.getBooksService();
        return res.status(200).json({message:'books retrieved successfully', data: books});
    }
    catch(err){
        return res.status(400).json({message:err})
    }
}
async function updateBookController(req,res){
    try{
        const updatedBook=await bookService.updateBookService(req.params.title,req.body.year);
        return res.status(200).json({message:'book updated successfully',data:updatedBook})
    }catch(err){
        return res.status(400).json({message:err})
    }
}
async function findBookByTitleController(req,res){
    try{
        const book=await bookService.findBookByTitleService(req.query.title);
        return res.status(200).json({message:'book retrieved successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }
}
async function findBookByYearController(req,res){
    try{
        const book=await bookService.findBookByYearService(Number(req.query.from),Number(req.query.to));
       return res.status(200).json({message:'book retrieved successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }
}
async function findBookByGenreController(req,res){
    try{
        const book = await bookService.findBookByGenreService(req.query.genre)
        return res.status(200).json({message:'book retrieved successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }
}
async function find3BooksDecendingOrderByYearController(req,res){
    try{
        const book = await bookService.find3BooksDecendingOrderByYearService()
        return res.status(200).json({message:'book retrieved successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }
}
async function findBooksByYearIntegerController(req,res){
    try{
        const book = await bookService.findBooksByYearIntegerService()
        return res.status(200).json({message:'book retrieved successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }
}
async function findBooksExcludeGenersController(req,res){
    try{
        const book = await bookService.findBooksExcludeGenersService(req.body.genres)
        return res.status(200).json({message:'book retrieved successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }
}
async function deleteBooksBeforeYearController(req,res){
    try{
        const book = await bookService.deleteBooksBeforeYearService(req.query.year)
        return res.status(200).json({message:'book deleted successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }          
}
async function aggregateBooks1Controller(req,res){
    try{
        const book = await bookService.aggregateBooks1Service()
        return res.status(200).json({message:'book retrieved successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }       
}
async function aggregateBooks2Controller(req,res){
    try{
        const book = await bookService.aggregateBooks2Service()
        return res.status(200).json({message:'book retrieved successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }   
}
async function aggregateBooks3Controller(req,res){
    try{
        const book = await bookService.aggregateBooks3Service()
        return res.status(200).json({message:'book retrieved successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }       
}
async function aggregateBooks4Controller(req,res){
    try{
        const book = await bookService.aggregateBooks4Service()     
        return res.status(200).json({message:'book retrieved successfully',data:book})
    }catch(err){
        return res.status(400).json({message:err})
    }       
}
module.exports={createBookCollectionController,createIndexBookController,insertBookController,insertBooksController,getBooksController,updateBookController,findBookByTitleController,findBookByYearController,findBookByGenreController,find3BooksDecendingOrderByYearController,findBooksByYearIntegerController,findBooksExcludeGenersController,deleteBooksBeforeYearController,aggregateBooks1Controller,aggregateBooks2Controller,aggregateBooks3Controller,aggregateBooks4Controller}