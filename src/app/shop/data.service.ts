import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<any>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(foodList: any) {
    this.messageSource.next(foodList);
  }
}
