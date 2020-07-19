const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Productdb');
const Schema= mongoose.Schema;

var newproductschema=new Schema({
   // _id:String,
    productId:Number,
    productName: String,
    productCode:String,
    releaseDate:String,
    description:String,
    price:Number,
    starRating:Number,
    imageUrl:String
});
var Productdata=mongoose.model('products',newproductschema);
//var Productdata=mongoose.model('products',newproductschema,'product');
module.exports=Productdata;