

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {
  
  id:number = 0;
  //private miApiUrl = 'http://localhost:8080';
  private miApiUrl = 'https://portfoil-bracciale.herokuapp.com';
  private proyectUrl = this.miApiUrl + '/projects' ;

  constructor(private http: HttpClient, private aS: AuthenticationService) { }

  async getAllProyects(): Promise<Observable<any>> {
    var currentUser = this.aS.AuthenticatedUser;
   this.getId(currentUser.username).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 1000));
    return this.http.get<any>(this.proyectUrl+'/get/'+this.id);  
  }

  async getAllProyectsPublic(currentUser: string) {
    this.getId(currentUser).subscribe(data => {
      this.id = data;
    })
    await new Promise(f => setTimeout(f, 1000));
    return this.http.get<any>(this.proyectUrl+'/get/'+this.id);
  }

  addProject(project :Project, userId:number){
    return this.http.post<Project>(this.proyectUrl+"/create/"+userId,project);
  }

  editProject(project :Project, userId: number){
    
    return this.http.post<Project>(this.proyectUrl+"/edit/"+userId,project);
  }

  deleteProject(id :number){
  
    return this.http.delete<Project>(this.proyectUrl+"/"+id);
  }

  

  getId(username: String): Observable<any> {
    return this.http.get<any>(this.miApiUrl + "/MyUsers/get/" + username);
  }
  
}
