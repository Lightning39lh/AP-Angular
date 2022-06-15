import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  id:number = 0;
  private miApiUrl = 'http://localhost:8080';
  private experienceUrl = this.miApiUrl + '/experience' ;

  constructor(private http: HttpClient, private aS: AuthenticationService, ) { }
/*
  async getAllExperiences(): Promise<Observable<any>> {
    
    var currentUser = this.aS.AuthenticatedUser;
    
    this.getId(currentUser.username).subscribe(data => {
      this.id = data;
      console.log(data);
    })
    await new Promise(f => setTimeout(f, 50));
    return this.http.get<any>(this.experienceUrl+'/'+this.id);  
  }
  getId(username: String): Observable<any> {
    console.log(username);
    return this.http.get<any>(this.miApiUrl + "/MyUsers/" + username);
  }*/
  async getAllExperiences(username): Promise<Observable<any>> {
   
    this.getId(username).subscribe(data => {
      this.id = data;
      console.log(data);
    })
    await new Promise(f => setTimeout(f, 50));
    return this.http.get<any>(this.experienceUrl+'/'+this.id);  
  }
  getId(username: String): Observable<any> {
    console.log(username);
    return this.http.get<any>(this.miApiUrl + "/MyUsers/" + username);
  }
  
}
