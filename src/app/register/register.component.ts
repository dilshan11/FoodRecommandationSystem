import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { FoodproviderService } from '../foodprovider.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  who=true;
  // isregistered=true;

  shopForm=new FormGroup({
    shownerName:new FormControl('',Validators.required),
    shName:new FormControl('',Validators.required),
    shtel:new FormControl('',Validators.required),
    shaddress:new FormControl('',Validators.required),
    shemail:new FormControl('',Validators.email),
    shpassword:new FormControl('',Validators.required),
    shrepassword:new FormControl('',Validators.required),

  });


  validatingForm = new FormGroup({
    stuname: new FormControl('', Validators.required),
    stuemail: new FormControl('', Validators.email),
     stuheight: new FormControl('', Validators.required),
      stuage:new FormControl('',Validators.required),
      stuweight:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),

      password: new FormControl('', Validators.required),
      
      repassword: new FormControl('', Validators.required)
   


  });
  constructor(private studentservice:StudentService,private foodproviderservice:FoodproviderService) { }

  ngOnInit() {
 
 }
  reformatestudent(){
    let  student={
      stuname:this.validatingForm.get('stuname').value,
      password:this.validatingForm.get('password').value,
      stuage: Number.parseInt(this.validatingForm.get('stuage').value),
      email: this.validatingForm.get('stuemail').value,
      stuheight:Number.parseFloat(this.validatingForm.get('stuheight').value),
      stuweight:Number.parseFloat(this.validatingForm.get('stuweight').value),
      gender:this.validatingForm.get('gender').value=="male"?1:0
  }
  return student;
}
reformatsfoodproviders(){
  let foodprovider={
    shownerName:this.shopForm.get('shownerName').value,
    shName:this.shopForm.get('shName').value,
    shtel:Number.parseInt(this.shopForm.get('shtel').value),
    shaddress:this.shopForm.get('shaddress').value,
    shemail:this.shopForm.get('shemail').value,
    shpassword:this.shopForm.get('shpassword').value,
  }
  return foodprovider;
}


studentClick(divshop,divstudent){
  this.who=true;
  divstudent.style.backgroundColor="#004d40";
  divshop.style.backgroundColor="#00acc1";
}

shopClick(divshop,divstudent){
  this.who=false;
  divshop.style.backgroundColor="#004d40";
  divstudent.style.backgroundColor="#00acc1";

  
}

  getRegister(){
   
    if(this.who){
    this.studentservice.studentRegister(this.reformatestudent()).
    subscribe(data=>{
      console.log(data);
    });
  }
  else{
   this.foodproviderservice.makeRegister(this.reformatsfoodproviders()).
   subscribe(data=>{
     console.log(data);
   })
    }
  }

// shopform get start here

  get shownerName(){
    return this.shopForm.get('shownerName');
  }
  get shName(){
    return this.shopForm.get('shName');
  }
  get shtel(){
    return this.shopForm.get('shtel');
  }
  get shaddress(){
    return this.shopForm.get('shaddress');
  }
  get shemail(){
    return this.shopForm.get('shemail');
  }
  get shpassword(){
    return this.shopForm.get('shpassword');
  }
  get shrepassword(){
    return this.shopForm.get('shrepassword');
  }





  // shop form data over here

  get stuname() {
    return this.validatingForm.get('stuname');
  }

  get stuemail() {
    return this.validatingForm.get('stuemail');
  }

  get password() {
    return this.validatingForm.get('password');
  }
  get stuheight() {
    return this.validatingForm.get('stuheight');
  }
  get stuage() {
    return this.validatingForm.get('stuage');
  }
  get stuweight() {
    return this.validatingForm.get('stuweight');
  }
  get gender() {
    return this.validatingForm.get('gender');
  }
  get repassword() {
    return this.validatingForm.get('repassword');
  }
}
