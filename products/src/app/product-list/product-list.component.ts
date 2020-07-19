import { Component, OnInit } from '@angular/core';
import { ProductModel} from './product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 
    title:String="Product List";
    products:ProductModel[];
    imagewidth:number=50;
    imagemargin:number=2;
    showimage:boolean=false;
    constructor(private productservice:ProductService) { }
    toggleimage():void{
      this.showimage=!this.showimage;
    }
  ngOnInit(): void {
    this.productservice.getproducts()
    .subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
      
    })
      
    
  }

}
