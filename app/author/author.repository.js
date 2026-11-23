const Author = require('./author.model.js');
async function createAuthorCollection(){
    return await Author.createCollection();
}
async function insertAuthor(author){
    return await Author.create(author);
}
module.exports={createAuthorCollection,insertAuthor}