import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  studentRegister(regstudent){
    console.log(regstudent);
    return this.httpClient.post('http://localhost:8080/student/Register',regstudent,{responseType:'text'});
  }

  studentlogging(studentlog){
    return this.httpClient.post('http://localhost:8080/student/logging',studentlog);
     
  }
}
