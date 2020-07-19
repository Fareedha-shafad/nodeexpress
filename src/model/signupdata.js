const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;

const SignUpSchema=new Schema({
fname:String,
lname:String,
email:String,
age:String,
phone:String,
adress:String,
country:String,
password:String

})


var SignUpdata=mongoose.model('signupdata',SignUpSchema);
module.exports=SignUpdata;