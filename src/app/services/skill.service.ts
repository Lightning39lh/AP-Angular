import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  id:number = 0;
  private miApiUrl = 'https://portfoil-bracciale.herokuapp.com';
  private skillUrl = this.miApiUrl + '/skills' ;

  constructor(private http: HttpClient, private aS: AuthenticationService) { }

  getAllSkills(userId) {
    
    return this.http.get<any>(this.skillUrl+'/get/'+userId);  
    
  }

 

  
  addSkill(skill :Skill, userId:number){
    return this.http.post<Skill>(this.skillUrl+"/create/"+userId,skill);
  }

  editSkill(skill :Skill, userId: number){
    
    return this.http.post<Skill>(this.skillUrl+"/edit/"+userId,skill);
  }

  deleteSkill(id :number){
  
    return this.http.delete<Skill>(this.skillUrl+"/"+id);
  }


  getId(username: String): Observable<any> {
    return this.http.get<any>(this.miApiUrl + "/MyUsers/get/" + username);
  }
}
