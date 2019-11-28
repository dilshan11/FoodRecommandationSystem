import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodproviderService } from 'src/app/foodprovider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
      console.log(data);
      this.refoodlist=data;
      this.refoodlist=this.refoodlist.common;
      console.log(this.refoodlist);
   
    });
    
  }
  listClick(food,fdin){
    console.log(food);
    fdin.value=food.food_name;
    this.listview=false;
  }

}
