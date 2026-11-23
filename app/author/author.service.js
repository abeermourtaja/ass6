const authorRepository=require('./author.repository.js');
const createAuthorCollectionService=async()=>{
    await authorRepository.createAuthorCollection();
    console.log('author collection created successfully');
};
const insertAuthorService=async(author)=>{
    await authorRepository.insertAuthor(author);
    console.log('author inserted successfully');
};
module.exports={createAuthorCollectionService, insertAuthorService}