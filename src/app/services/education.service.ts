import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  id:number = 0;
  private miApiUrl = 'http://localhost:8080';
  private educationUrl = this.miApiUrl + '/education' ;

  constructor(private http: HttpClient, private aS: AuthenticationService) { }

  //for private
  async getAllEducations(): Promise<Observable<any>> {
    
    var currentUser = this.aS.AuthenticatedUser;
    
    this.getId(currentUser.username).subscribe(data => {

      this.id = data;
    })
    await new Promise(f => setTimeout(f, 100));
    return this.http.get<any>(this.educationUrl+'/get/'+this.id);  
  }
  //for public
  async getAllEducationsPublic(currentUser: string): Promise<Observable<any>> {
 
    this.getId(currentUser).subscribe(data => {

      this.id = data;
    })
    await new Promise(f => setTimeout(f, 100));
    return this.http.get<any>(this.educationUrl+'/get/'+this.id);  
  }

  getId(username: String): Observable<any> {
    return this.http.get<any>(this.miApiUrl + "/MyUsers/get/" + username);
  }

}
