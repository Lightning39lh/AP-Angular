import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-proyects-show',
  templateUrl: './proyects-show.component.html',
  styleUrls: ['./proyects-show.component.css']
})

  
export class ProyectsShowComponent implements OnInit {

  username:string;
  projects: Project[] = [];
  constructor(private proyectService: ProyectService,private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.username = this.route.snapshot.paramMap.get("username")
   this.getAllProyects();
 

  }

 // connect angular with rest api 
  async getAllProyects(): Promise<void> {
    (await this.proyectService.getAllProyectsPublic(this.username)).subscribe(data => {
      this.projects = data;
     })
    }

 }
