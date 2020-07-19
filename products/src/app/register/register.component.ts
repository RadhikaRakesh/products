import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,Validators,ReactiveFormsModule, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import{logmodel} from '../login/log.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
title:String="Register ";
  constructor(private fb:FormBuilder,
   private productservice:ProductService,
  private  router:Router) { }
 reguser= new logmodel(null,null);
  regform= this.fb.group(
    {email:['',[Validators.required, Validators.pattern('')]],
    password:['',[Validators.required,Validators.minLength(6)]]
      
    }
  )
  registeruser()
  {
    this.productservice.register(this.reguser);
    console.log("registeruser function"+this.reguser);
    console.log("register called");
   // alert("success");
    this.router.navigate(['/']);
  }


  ngOnInit():void {
  }

}
