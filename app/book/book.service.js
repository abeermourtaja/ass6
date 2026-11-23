const bookRepository=require('./book.repository.js');
const createBookCollectionService=async()=>{
    await bookRepository.createBookCollection();
};
const creatIndexBookService=async()=>{
    await bookRepository.createIndexBook()
}
const insertBookService=async(book)=>{
    await bookRepository.insertBook(book)
}
const insertBooksService=async(books)=>{
    await bookRepository.insertBooks(books)
}
const getBooksService=async()=>{
    return await bookRepository.getBooks();
}
const updateBookService=async(title,year)=>{
    return await bookRepository.updateBook(title,year);
}
const findBookByTitleService=async(title)=>{
    return await bookRepository.findBookByTitle(title);
}
const findBookByYearService=async(fromYear,toYear)=>{
    return await bookRepository.findBookByYear(fromYear,toYear);
}
const findBookByGenreService=async(genre)=>{
    return await bookRepository.findBookByGenre(genre);
}
const find3BooksDecendingOrderByYearService=async()=>{
    return await bookRepository.find3BooksDecendingOrderByYear();
}
const findBooksByYearIntegerService=async()=>{
    return await bookRepository.findBooksByYearInteger();
}
const findBooksExcludeGenersService=async(geners)=>{
    return await bookRepository.findBooksExcludeGeners(geners);
}
const deleteBooksBeforeYearService=async(year)=>{
    return await bookRepository.deleteBooksBeforeYear(year);
}
const aggregateBooks1Service=async()=>{
    return await bookRepository.aggregateBooks1();
}
const aggregateBooks2Service=async()=>{
    return await bookRepository.aggregateBooks2();
}
const aggregateBooks3Service=async()=>{
    return await bookRepository.aggregateBooks3();
}
const aggregateBooks4Service=async()=>{
    return await bookRepository.aggregateBooks4();
}
module.exports={createBookCollectionService,creatIndexBookService,insertBookService,insertBooksService,getBooksService,updateBookService,findBookByTitleService,findBookByYearService,findBookByGenreService,find3BooksDecendingOrderByYearService,findBooksByYearIntegerService,findBooksExcludeGenersService,deleteBooksBeforeYearService,aggregateBooks1Service,aggregateBooks2Service,aggregateBooks3Service,aggregateBooks4Service}