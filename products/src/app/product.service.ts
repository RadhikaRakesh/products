import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private routes:Router) { }
  getproducts(){
    return this.http.get("http://localhost:3000/products");
  }
  editproducts(){
    return this.http.get("http://localhost:3000/edit");
  }
  newproduct(item){
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{//console.log("front end"+data);
    this.getproducts();
    })
  }
 upproducts(item){
  
  return this.http.post("http://localhost:3000/updating",{"product":item})
  .subscribe(data=>{//console.log("front end"+data);
 this.getproducts();
  });
 }

 loggedin(item){
   console.log("in login service"+item.email);
   return this.http.post("http://localhost:3000/login",{"logdata":item})
   .subscribe(data=>{
     console.log("logged infunction ");
     alert("logged in");
   })
 }
 register(item){
  console.log("in register service"+item.email);
  return this.http.post("http://localhost:3000/register",{"logdata":item})
  .subscribe(data=>{console.log("front end regi"+data);
 // this.getproducts();
 alert("registerd "+data);
  })
 }
  getupdate(id)
  { 
    let url=`http://localhost:3000/edit/${id}`;
    console.log("update id  coming:",id);
   return  this.http.get(url);
   
  }
 
  updateproduct(id)
  {
    let url=`http://localhost:3000/update/${id}`;
    localStorage.setItem('id',id);
    console.log("update id  coming:",id);
    return this.http.get(url);
    //return result
   /* .subscribe(data=>{
      this.routes.navigate(['new-product']);

      console.log("update front end "+data);
      this.newproduct(data);
    })*/
  }
  

  cancelproduct(id)
  {
    let url=`http://localhost:3000/delete/${id}`;
    console.log("delete id ",id);
    return this.http.get(url);
    //.subscribe(data=>{console.log("delete Product front end "+data);
    //this.getproducts();
   // })
  }
  registeruser(){
    return this.http.get("http://localhost:3000/register");
  }
  loginuser(){
    return this.http.get("http://localhost:3000/login");
  }
}
