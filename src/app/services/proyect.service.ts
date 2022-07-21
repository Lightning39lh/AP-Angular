

import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {
  
  id:number = 0;
  private miApiUrl = 'http://localhost:8080';
  private proyectUrl = this.miApiUrl + '/projects' ;

  constructor(private http: HttpClient, private aS: AuthenticationService) { }

  async getAllProyects(): Promise<Observable<any>> {
    var currentUser = this.aS.AuthenticatedUser;
   this.getId(currentUser.username).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 300));
    return this.http.get<any>(this.proyectUrl+'/get/'+this.id);  
  }

  async getAllProyectsPublic(currentUser: string) {
    this.getId(currentUser).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 300));
    return this.http.get<any>(this.proyectUrl+'/get/'+this.id);
  }

  addProject(project :Project, userId:number){
    return this.http.post<Project>(this.proyectUrl+"/create/"+userId,project);
  }

  editProject(project :Project, userId: number){
    console.log(this.proyectUrl+"/create/"+userId);
    console.log(project);
    return this.http.post<Project>(this.proyectUrl+"/create/"+userId,project);
  }


  getId(username: String): Observable<any> {
    return this.http.get<any>(this.miApiUrl + "/MyUsers/get/" + username);
  }
  
}
