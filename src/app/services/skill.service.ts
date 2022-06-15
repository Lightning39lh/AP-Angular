import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    await new Promise(f => setTimeout(f, 50));
    return this.http.get<any>(this.skillUrl+'/'+this.id);  
  }
  getId(username: String): Observable<any> {
    return this.http.get<any>(this.miApiUrl + "/MyUsers/" + username);
  }
}
