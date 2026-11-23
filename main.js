const express=require('express');
const mongoose=require('mongoose');
const app=express();
const bookRouter=require('./app/book/book.route.js');
const authorRouter=require('./app/author/author.route.js');
const logRouter=require('./app/log/log.route.js');
mongoose.connect('mongodb://localhost:27017/mydb').then(()=>
    console.log('Connected to MongoDB')
).catch((err)=>
    console.log(err)
);
app.use(express.json());
app.use(bookRouter);
app.use(authorRouter);
app.use(logRouter);
app.listen(3000, () => {
    console.log('Server running on port 3000');
});