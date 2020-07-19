import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import { Router} from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { formatCurrency } from '@angular/common';
import { FormBuilder ,FormGroup,Validators,ReactiveFormsModule, FormControl} from '@angular/forms';



@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
title:String="Edit produt";
products:ProductModel;
updateuser= this.fb.group(
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

  constructor(private productservice:ProductService,
    private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    let id=localStorage.getItem("id");
    console.log("local id "+id);
    this.productservice.getupdate(id)
    .subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
      //this.updateuser.setValue(data);
      console.log("update result name of product "+this.products.productName);
      //this.products=data;
    })
      
  }
  upproduct()
{
  this.productservice.upproducts(this.products);
  console.log(this.products);
  console.log("called");
  alert("success");
  this.router.navigate(['/']);
}
}
