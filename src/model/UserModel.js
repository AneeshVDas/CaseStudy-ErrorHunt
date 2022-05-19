const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

const UserSchema = new Schema({
    uid : String,
    pwd: String
});

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;