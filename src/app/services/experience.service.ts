import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Experience } from '../models/Experience';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  id:number = 0;
  private miApiUrl = 'http://localhost:8080';
  private experienceUrl = this.miApiUrl + '/experience' ;

  constructor(private http: HttpClient, private aS: AuthenticationService, ) { }

  async getAllExperiencesPrivate(): Promise<Observable<any>> {
    var currentUser = this.aS.AuthenticatedUser;
    this.getId(currentUser.username).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 300));
    return this.http.get<any>(this.experienceUrl+'/get/'+this.id);  
  }
  async getAllExperiences(username): Promise<Observable<any>> {
   
    this.getId(username).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 300));
    
    return this.http.get<any>(this.experienceUrl+'/get/'+this.id);  
  }

  
  addExperience(experience :Experience, userId:number){
    return this.http.post<Experience>(this.experienceUrl+"/create/"+userId,experience);
  }

  editExperience(experience :Experience, userId: number){
    
    return this.http.post<Experience>(this.experienceUrl+"/edit/"+userId,experience);
  }

  deleteExperience(id :number){
  
    return this.http.delete<Experience>(this.experienceUrl+"/"+id);
  }


    getId(username: String): Observable<any> {
    return this.http.get<any>(this.miApiUrl + "/MyUsers/get/" + username);
  }
  
}
