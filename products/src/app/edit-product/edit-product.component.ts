import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import {Router} from '@angular/router';
import { ProductModel } from '../product-list/product.model';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
title:String="Edit Product";
products:ProductModel[];
  constructor(private productservice:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productservice.editproducts()
    .subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }


  doupdate(product){
  // this.productservice.setter(product);

    this.productservice.updateproduct(product._id)
    .subscribe((data)=>{
      console.log("doupdate function subscribe");
    this.router.navigate(['/updateproduct']);
    });
   /* .subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    //});
    */
    //console.log("update called");
  // alert(" updted success");
    //this.router.navigate(['/']);
       
   // this.router.navigate(['/new-product']);
  }
  dodelete(product){
    this.productservice.cancelproduct(product._id)
    .subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    
    //console.log(product);
    });
    console.log("delete called");
   alert(" delete success");
    this.router.navigate(['/']);
    //console.log("pid in edit "+product._id);
    //this.router.navigate(['/']);
  }

}
