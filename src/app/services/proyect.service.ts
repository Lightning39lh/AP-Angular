/*import { Injectable } from '@angular/core';
import { Proyect } from '../models/Proyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  proyects: Proyect[] = []
  constructor() { }

  getAllProyects(): Proyect[] {
    let proyect1 = new Proyect(1,"App para aprender japones","aca quisiera ponerle imagenes")
    this.proyects.push(proyect1)
    this.proyects.push(new Proyect(2,"Juego rpg tactics", "same"))

    return this.proyects
  }

  

}*/

import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Proyect } from '../interfaces/Proyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  //proyects: Proyect[] = []
  
  private miApiUrl = 'http://localhost:8080/api';
  private proyectUrl = this.miApiUrl + '/proyect' ;

  constructor(private http: HttpClient) { }

  getAllProyects(): Observable<any> {
    return this.http.get<any>(this.proyectUrl+'/all');
    
  
  }
  getProyect(id:number): Observable<any> {
    return this.http.get<any>(this.proyectUrl+'/'+id);
  }

}
