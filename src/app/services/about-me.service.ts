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

  
  getAllPersons(UserId:number) {
    return this.http.get<any>(this.personUrl+'/get/'+UserId);  
  }
  editPerson(person :Person, userId: number){
    
    return this.http.post<Person>(this.personUrl+"/edit/"+userId,person);
  }
  getId(username: String): Observable<any> {
    return this.http.get<any>(this.miApiUrl + "/MyUsers/get/" + username);
  }
}
