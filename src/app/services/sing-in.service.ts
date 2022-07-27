import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SingInService {
  URL = 'http://localhost:8080/MyUsers/';
  constructor(public http : HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(this.URL+'get');  
  }


  addUser(user :User){
    return this.http.post<User>(this.URL+"save",user);
  }
}
