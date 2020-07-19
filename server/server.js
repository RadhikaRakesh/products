const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const Productdata = require('./src/models/productdata');
const logdata=require('./src/models/logdata');
const { Console } = require('console');

const app=express();
app.use(cors());
app.use(bodyParser.json());

/*const db='mongodb+srv://user_radhika:adminrr@mycluster.rsbj0.mongodb.net/productdb?retryWrites=true&w=majority';

mongoose.connect(db,function(err){
    if(err){
        console.error('Error '+err);
    }
    else{
        console.log('connected to mongodb');
    }
})
*/
app.get('/',function(req,res){
    res.send("hello world");
})

app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    Productdata.find()
        .then(function(products){
           // console.log(products);
            res.send(products);
        });
    
})
app.post('/login',function(req,res){
     res.header("Access-Control-Allow-Origin","*")
     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log("login server email",req.body.logdata.email);
        let userdata=req.body.logdata;
        console.log("user id in server "+userdata.email);
        logdata.findOne({email:userdata.email},(err,user)=>{
            if(err)
            {
                res.send("error in login server");
               //res.send(err);
               //("error in login");
            }
            else if(!user){
                res.send("invalid Email");
              
            }
            else if(user.password!==userdata.password){
            res.send("invalid password");
             //alert("password mismatch");   
            }
            else{
               console.log("userid in login"+user.email);
                res.send(user);
            
                //res.status(200).send(user);
            }
        })
    })


app.post('/register',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log("register email:"+req.body.logdata.email);
       // let userdata=req.body;
        var userdata={
            email:req.body.logdata.email,
            password:req.body.logdata.password,
        }
        var user=new logdata(userdata);
   console.log("email of new user:"+user.email);
   user.save();
   res.send(user);
       /* var userdata=new  logdata(userdata);
        userdata.save((err,user)=>{
            if(err)
            {
                res.send("error inregister");
                //console.log(" error occured"+err);
            }
            else{
              // Console.log("registered ok");
                res.send(user);
            }
        })*/
     })


app.get('/edit',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
     Productdata.find()
         .then(function(products){
             //console.log(products);
        
             res.send(products);
         });
     
 })
 app.get('/edit/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
     Productdata.findById({_id:req.params.id})
         .then(function(products){
             console.log("server edit"+products.productName);
            // localStorage.setItem(_id);
             res.send(products);
         });
     
 })
 app.get('/delete/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
  
    var id= req.params.id;
 
  console.log(" delete server id "+id);
  Productdata.findByIdAndRemove({_id:id}) //,(err,products)=>{
     // if(err)
      //res.send('error'+err);
 // })
 .then(function(){
        Productdata.find()
     . then(function(products){
        //console.log(products);
        res.send(products);
     });
       // console.log(" product delete in server "+products);
      //res.send(products);
      
     });

 })


 app.get('/update/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
     var id=req.params.id;
     
     /*console.log("update id in server"+id);
*/
   // console.log("req bodyid product name in server"+product.productName);
    Productdata.findById({_id:id})  //req.body,(err,products)=>{
       .then(function(data){
       
           
             res.send(data);  
         });
})
app.post('/updating',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    //var id=req..id;
    var upproduct={
   //     _id:req.body.product._id,
   productId:req.body.products.productId,
   productName:req.body.products.productName,
   productCode:req.body.products.productCode,
   releaseDate:req.body.products.releaseDate,
   description:req.body.products.description,
   price:req.body.products.price,
   starRating:req.body.products.starRating,
   imageUrl:req.body.products.imageUrl
     }

Productdata.findById({_id:product._id})
  .then(function ()  
{
    var up= new Productdata(upproduct);
console.log("updated in updating "+upproduct);
Productdata.findByIdAndUpdate(up._id,up,(er,result)=>{
console.log("updated"+result);
})
})
})

 


app.post('/insert',function(req,res){
 res.header("Access-Control-Allow-Origin","*")
res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
   console.log(" product name "+req.body.product.productName);
   var product={
       productId:req.body.product.productId,
       productName:req.body.product.productName,
       productCode:req.body.product.productCode,
       releaseDate:req.body.product.releaseDate,
       description:req.body.product.description,
       price:req.body.product.price,
       starRating:req.body.product.starRating,
       imageUrl:req.body.product.imageUrl
       
   }
   var product=new Productdata(product);
   
   product.save();
})


app.listen(3000,function(){
    console.log("server running");
});