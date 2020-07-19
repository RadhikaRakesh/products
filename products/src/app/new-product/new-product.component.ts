import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import { Router} from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { FormBuilder ,FormGroup,Validators,ReactiveFormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
title:String="Add New Product"
  constructor(private productservice:ProductService,private router:Router,
    private fb:FormBuilder) { }
productitem=new ProductModel(null,null,null,null,null,null,null,null);
newuser= this.fb.group(
  {
    productId:['',Validators.required],
  productName:['',Validators.required],
  productCode:['',Validators.required, ],
  releaseDate:['',Validators.required],
  description:['',Validators.required],
  price:['',Validators.required],
  starRating:['',Validators.required],
  imageUrl:['',Validators.required]
     
  }
)
  ngOnInit(): void {
    
  }
addproduct(){
  this.productservice.newproduct(this.productitem);
  console.log(this.productitem);
  console.log("called");
  alert("success");
  this.router.navigate(['/']);
}
}
