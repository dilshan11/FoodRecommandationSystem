import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodproviderService } from 'src/app/foodprovider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  amount=0;
  choosenfoodlist=[];
  foodcalorie;
  lastfoodcalorie;
    refoodlist;
    foodlist;
    listview=false;
    foodForm=new FormGroup({
      food:new FormControl()
    });
  constructor(private foodprovide:FoodproviderService) { }
     food;
  ngOnInit() {
  }
  onkeyup(event,fdin){
    this.food={
      'query':fdin.value
    }
    this.listview=true;
    this.foodprovide.getfoodlist(this.food).
    subscribe(data=>{
      // console.log(data);
      this.refoodlist=data;
      this.refoodlist=this.refoodlist.common;
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
    console.log("addfood");
     this.choosenfoodlist.push(food);
     fdin.value=null;
     this.lastfoodcalorie=null;
     this.amount=0;
      for(let a of this.choosenfoodlist){
        this.amount=this.amount+a.fcalori;
      }
  }
  cleardata(fdin){
    fdin.value=null;
    this.lastfoodcalorie=null;

    console.log('clearrrrrrrrrrrr');
  }

}
