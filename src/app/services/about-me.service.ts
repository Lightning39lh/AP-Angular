import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  id:number = 0;
  //private miApiUrl = 'http://localhost:8080';
  private miApiUrl = 'https://portfoil-bracciale.herokuapp.com';
  private personUrl = this.miApiUrl + '/persons' ;

  constructor(private http: HttpClient, private aS: AuthenticationService) { }

  async getAllPersonsPrivate(): Promise<Observable<any>> {
    var currentUser = this.aS.AuthenticatedUser;
    this.getId(currentUser.username).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 1000));
    return this.http.get<any>(this.personUrl+'/get/'+this.id);  
  }

  async getAllPersons(username): Promise<Observable<any>> {
   
    this.getId(username).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 100));
    return this.http.get<any>(this.personUrl+'/get/'+this.id);  
  }

  
  editPerson(person :Person, userId: number){
    
    return this.http.post<Person>(this.personUrl+"/edit/"+userId,person);
  }
  getId(username: String): Observable<any> {
    return this.http.get<any>(this.miApiUrl + "/MyUsers/get/" + username);
  }
}
