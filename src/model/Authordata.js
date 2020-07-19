const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Schema=mongoose.Schema;

const AuthorSchema=new Schema({
    
    author:String,
   // catogory:String,
    img:String,
    title:String
});
console.log("authordb connected");
var Authorsdata=mongoose.model('authordatas',AuthorSchema);
console.log("authordb connected");
module.exports=Authorsdata;