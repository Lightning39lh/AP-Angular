import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/Education';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  id:number = 0;
  //private miApiUrl = 'http://localhost:8080';
  private miApiUrl = 'https://portfoil-bracciale.herokuapp.com';
  private educationUrl = this.miApiUrl + '/education' ;

  constructor(private http: HttpClient, private aS: AuthenticationService) { }

  getAllEducations(UserId:number) {
    
   return this.http.get<any>(this.educationUrl+'/get/'+UserId);  
  }

  addEducation(education :Education, userId:number){
    return this.http.post<Education>(this.educationUrl+"/create/"+userId,education);
  }

  editEducation(education :Education, userId: number){
    
    return this.http.post<Education>(this.educationUrl+"/edit/"+userId,education);
  }

  deleteEducation(id :number){
  
    return this.http.delete<Education>(this.educationUrl+"/"+id);
  }


  getId(username: String): Observable<any> {
    return this.http.get<any>(this.miApiUrl + "/MyUsers/get/" + username);
  }

}
