const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
const uri = "mongodb+srv://AneeshV:Aneesh*1234@cluster0.hdx3u.mongodb.net/Library?retryWrites=true&w=majority";
mongoose.connect(uri);
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;