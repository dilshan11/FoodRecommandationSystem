import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { FoodproviderService } from '../foodprovider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   what=true;
  validatingForm = new FormGroup({
    loginFormModalEmail: new FormControl('', Validators.email),
    loginFormModalPassword: new FormControl('', Validators.required)
  });

constructor(private studentservice:StudentService,private foodproviderservice:FoodproviderService,private router:Router){

}
  ngOnInit() {
  
  }

  studentClick(divshop,divstudent){
    this.what=true;
    divstudent.style.backgroundColor="#004d40";
    divshop.style.backgroundColor="#00acc1";
  }
  
  shopClick(divshop,divstudent){
    this.what=false;
    divshop.style.backgroundColor="#004d40";
    divstudent.style.backgroundColor="#00acc1";
  }
reformatdata(){
  let formdata={
    email:this.validatingForm.get('loginFormModalEmail').value,
    password:this.validatingForm.get('loginFormModalPassword').value
  }
  return formdata;
}
reformatdataforprovider(){
  let formdata={
    shemail:this.validatingForm.get('loginFormModalEmail').value,
    shpassword:this.validatingForm.get('loginFormModalPassword').value
  }
  return formdata;
}

  getlogin(){
    // this.router.navigate(['/shdashboard'])
    if(this.what){
    this.studentservice.studentlogging(this.reformatdata()).
    subscribe(data=>{
      console.log(data);
    });
    
    }
    else{
     this.foodproviderservice.makelogging(this.reformatdataforprovider()).
     subscribe(data=>{
      console.log(data);
        if(data!=null){
          this.router.navigate(['/shdashboard']);
        }
      
     })
    }
  }


  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }
  

}
