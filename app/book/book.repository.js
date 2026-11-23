const Book = require('./book.model.js');
const Log = require('../log/log.model');

// Create books collection
async function createBookCollection() {
    return await Book.createCollection();
}

// Create index on title
async function createIndexBook() {
    return await Book.collection.createIndex({ title: 1 });
}

// Insert one book
async function insertBook(book) {
    return await Book.create(book);
}

// Insert multiple books
async function insertBooks(books) {
    return await Book.insertMany(books);
}

// Get all books
async function getBooks() {
    return await Book.find();
}

// Update book year by title
async function updateBook(filter, updatedData) {
    return await Book.findOneAndUpdate(
        { title: filter },
        { $set: { year: updatedData } },
        { new: true }
    );
}

// Find book by title
async function findBookByTitle(title) {
    return await Book.findOne({ title: title });
}

// Find books between two years
async function findBookByYear(fromYear, toYear) {
    return await Book.find({
        year: { $gte: fromYear, $lte: toYear }
    });
}

// Find books by genre
async function findBookByGenre(genre) {
    return await Book.find({ genres: genre });
}

// Find 3 books after skipping the first 2,
// sorted by year descending
async function find3BooksDecendingOrderByYear() {
    return await Book.find()
        .sort({ year: -1 })
        .skip(2)
        .limit(3);
}

// Find books where year is stored as an integer
async function findBooksByYearInteger() {
    return await Book.find({
        year: { $type: 'int' }
    });
}

// Find books whose genres do not contain any given genre
async function findBooksExcludeGeners(geners) {
    return await Book.find({
        genres: {
            $nin: geners,
            $exists: true
        }
    });
}

// Delete books published before the given year
async function deleteBooksBeforeYear(year) {
    return await Book.deleteMany({
        year: { $lt: year }
    });
}

// Find books published after 2000,
// sorted by year descending
async function aggregateBooks1() {
    return await Book.aggregate([
        {
            $match: {
                year: { $gt: 2000 }
            }
        },
        {
            $sort: {
                year: -1
            }
        }
    ]);
}

// Find books published after 2000,
// showing only title, author and year
async function aggregateBooks2() {
    return await Book.aggregate([
        {
            $match: {
                year: { $gt: 2000 }
            }
        },
        {
            $project: {
                _id: 0,
                title: 1,
                author: 1,
                year: 1
            }
        }
    ]);
}

// Separate each genre into its own document
async function aggregateBooks3() {
    return await Book.aggregate([
        {
            $unwind: '$genres'
        }
    ]);
}

// Join logs with books
async function aggregateBooks4() {
    return await Log.aggregate([
        {
            $lookup: {
                from: 'books',
                localField: 'book_id',
                foreignField: '_id',
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            title: 1,
                            year: 1,
                            author: 1
                        }
                    }
                ],
                as: 'book_details'
            }
        },
        {
            $project: {
                _id: 0,
                action: 1,
                book_details: 1
            }
        }
    ]);
}

module.exports = {
    createBookCollection,
    createIndexBook,
    insertBook,
    insertBooks,
    getBooks,
    updateBook,
    findBookByTitle,
    findBookByYear,
    findBookByGenre,
    find3BooksDecendingOrderByYear,
    findBooksByYearInteger,
    findBooksExcludeGeners,
    deleteBooksBeforeYear,
    aggregateBooks1,
    aggregateBooks2,
    aggregateBooks3,
    aggregateBooks4
};
