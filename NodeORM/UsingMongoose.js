var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;



var bookSchema = mongoose.Schema({
    bookNumber: Number,
    bookName: String,
    price: Number
});

var saveBook = mongoose.Schema({
    'bookNumber': 104,
    'bookName': 'Testing Mongoose',
    'price': 1000
});

var book = mongoose.model("books", bookSchema);
book.find(function(err, resp){
   // console.log('bookSchema:'+book);
    console.log(resp);
    db.close();
});

var book2 = mongoose.model("books", bookSchema);
new book2(saveBook).save(function(err){
    if(err){
        throw err;
    }
    console.log('Books saved');
});
