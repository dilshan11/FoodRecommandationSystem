import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { StudataService } from '../studata.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FoodproviderService } from 'src/app/foodprovider.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit  {
 

  calori;
  bmiType;
  bmi:number=0;
  manversion:boolean=true;
  student:any;

  food;
  listview=false;
  refoodlist;
  foodcalorie;
  lastfoodcalorie;
  choosenfoodlist=[];
  amount=0;
  foodForm=new FormGroup({
    food:new FormControl()
  });
  constructor(private stddataservice:StudataService,private foodprovide:FoodproviderService) { }

  ngOnInit() {
   
    this.student=this.stddataservice.student;             //get student details from data service
    this.bmi=Number.parseFloat(this.bmi_calculate().toFixed(2));    // get bmi amount and round it to 2 point digits
    this.typeofbmi();                                       // look type of bmi
   this.calori =this.calculateCalori();                   // calculate calorie
   this.manversion=this.deside_manversion();            // change image base on gender
    console.log(this.student);
  }
   

  onkeyup(event,fdin){
    console.log(event);
    this.food={
      'query':fdin.value
    }
    this.listview=true;
    this.foodprovide.getfoodlist(this.food).
    subscribe(data=>{
      // console.log(data);
      this.refoodlist=data;
      this.refoodlist=this.refoodlist.common.slice(0,2);
      
      // console.log(this.refoodlist);
   
    });
    
  }
  listClick(food,fdin){
    console.log(food.food_name);
    let yts={
      "query":food.food_name,
      "timezone":"US/Eastern"
    }
    this.foodprovide.getcaloricount(yts).
    subscribe(data=>{
      this.foodcalorie=data;
      console.log(this.foodcalorie.foods[0].nf_calories);
      this.lastfoodcalorie=this.foodcalorie.foods[0].nf_calories;
    });
    fdin.value=food.food_name;
    this.listview=false;
  }

  addfood(fdin){
    let food={
      fname:fdin.value,
      fcalori:this.lastfoodcalorie
    }
   
     this.choosenfoodlist.push(food);
     fdin.value=null;
     this.lastfoodcalorie=null;
     this.amount=0;
      for(let a of this.choosenfoodlist){
        this.amount=this.amount+a.fcalori;
      }
      // this.dataservice.changeMessage(this.choosenfoodlist);
  }
  








  deside_manversion(){
   return this.student.gender==1?true:false;
  }

  bmi_calculate(){
    return this.student.stuweight/((this.student.stuheight/100)*(this.student.stuheight/100)); 
  }
  typeofbmi(){
    if(this.bmi<18.5){
      this.bmiType="UnderWeight";
    }else if(this.bmi<24.99){
      this.bmiType="Normal Weight";
    }else if(this.bmi<30){
      this.bmiType="over Weight"
    }else if(this.bmi<35){
      this.bmiType="Class I obese"
    }else if(this.bmi<40){
      this.bmiType="Class II obese"
    }else{
      this.bmiType="Class III obese"
    }
  }
  calculateCalori(){
      let basecal=this.student.stuweight*10+6.25*this.student.stuheight-5*this.student.stuage;
      let basecalBoy=basecal-5;
      let basecalGirl=basecal-161;
      if(this.student.gender==1){
      return this.categoryto_activeleve(basecalBoy);
      }else{
        return this.categoryto_activeleve(basecalGirl);
      }
  }
  categoryto_activeleve(cal){
      if(this.student.activelevel==1){
        cal=cal*1.2;
      }else if(this.student.activelevel==2){
        cal=cal*1.375;
      }else if(this.student.activelevel==3){
        cal=cal*1.55;
      }else if(this.student.activelevel==4){
        cal=cal*1.725;
      }else if(this.student.activelevel==5){
        cal=cal*1.9;
      }
      return cal;
  }

}
