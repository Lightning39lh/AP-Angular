import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProyectService } from '../../services/proyect.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})

  
export class ProyectsComponent implements OnInit {


  projects: Project[] = [];
  constructor(private proyectService: ProyectService) { }

  ngOnInit(): void {
   
   this.getAllProyects();
 

  }

 // connect angular with rest api 
  async getAllProyects(): Promise<void> {
    (await this.proyectService.getAllProyects()).subscribe(data => {
      this.projects = data;
     })
    }

 }
