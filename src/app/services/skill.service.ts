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
  private miApiUrl = 'http://localhost:8080';
  private skillUrl = this.miApiUrl + '/skills' ;

  constructor(private http: HttpClient, private aS: AuthenticationService) { }

  async getAllSkills(): Promise<Observable<any>> {
    
    var currentUser = this.aS.AuthenticatedUser;
    
    this.getId(currentUser.username).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 300));
    return this.http.get<any>(this.skillUrl+'/get/'+this.id);  
  }

  //for public
  async getAllSkillsPublic(currentUser: string): Promise<Observable<any>> {
 
    this.getId(currentUser).subscribe(data => {

      this.id = data;
    })
    await new Promise(f => setTimeout(f, 300));
    return this.http.get<any>(this.skillUrl+'/get/'+this.id);  
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
