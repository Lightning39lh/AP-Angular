import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Link } from '../models/Link';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  id:number = 0;
  //private miApiUrl = 'http://localhost:8080';
  private miApiUrl = 'https://portfoil-bracciale.herokuapp.com';
  private linkUrl = this.miApiUrl + '/links' ;

  constructor(private http: HttpClient, private aS: AuthenticationService) { }

  async getAllLinks(): Promise<Observable<any>> {
    var currentUser = this.aS.AuthenticatedUser;
   this.getId(currentUser.username).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 1000));
    return this.http.get<any>(this.linkUrl+'/get/'+this.id);  
  }

  async getAllLinksPublic(currentUser: string) {
    this.getId(currentUser).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 1000));
    return this.http.get<any>(this.linkUrl+'/get/'+this.id);
  }

  editProject(link :Link, userId: number){
    console.log(this.linkUrl+"/create/"+userId);
    console.log(link);
    return this.http.post<Link>(this.linkUrl+"/create/"+userId,link);
  }


  getId(username: String): Observable<any> {
    return this.http.get<any>(this.miApiUrl + "/MyUsers/get/" + username);
  }
}
