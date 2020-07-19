const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Productdb');
const Schema= mongoose.Schema;

var newproductschema=new Schema({
   
    email: String,
    password:String
    
});
var logdata=mongoose.model('register',newproductschema);

module.exports=logdata;