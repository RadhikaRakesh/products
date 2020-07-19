import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import{logmodel} from './log.model';



@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title:String="Login";
  
  constructor(private fb:FormBuilder, private router:Router,private productservice:ProductService) { }
  logdata=new logmodel(null,null);
  loginform= this.fb.group(
    {email:['',[Validators.required, Validators.pattern('')]],
    password:['',[Validators.required,Validators.minLength(6)]]
      
    }
  )
get f(){
  return this.loginform.controls;
}
  loginuser(){
    
    this.productservice.loggedin(this.logdata);
    console.log(this.logdata);
    console.log("called");
    //alert("success");
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    
  }

}
