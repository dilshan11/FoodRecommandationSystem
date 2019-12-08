import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudataService {

  student;
  private stdsource=new BehaviorSubject<any>(null);
  currentstdMessage=this.stdsource.asObservable();

  constructor() { }

  sendMessage(std){
   
  }
  
}
