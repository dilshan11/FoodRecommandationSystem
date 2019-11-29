import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodproviderService {

  constructor(private httpClient:HttpClient) { }

  makeRegister(foodprovider){
   return this.httpClient.post('http://localhost:8080/foodprovide/Register',foodprovider,{responseType:'text'});
  }
  makelogging(foodprovider){
    // console.log(foodprovider);
    return this.httpClient.post('http://localhost:8080/foodprovide/logging',foodprovider);
  }

  getfoodlist(food){
    return this.httpClient.post('https://trackapi.nutritionix.com/v2/search/instant',food,{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-app-id':'52b20a3d',
        'x-app-key':'5fb6cf896c4027ba0695d58034cb273d'
      })
    })
  }


  getcaloricount(fcal){
    return this.httpClient.post('https://trackapi.nutritionix.com/v2/natural/nutrients',fcal,{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-app-id':'52b20a3d',
        'x-app-key':'5fb6cf896c4027ba0695d58034cb273d'
      })
    })


   }
}
