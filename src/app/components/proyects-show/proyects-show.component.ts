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
  UserId: number;
  constructor(private proyectService: ProyectService,private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.username = this.route.snapshot.paramMap.get("username")
   this.proyectService.getId(this.username).subscribe(data => {
    this.UserId = data;
    this.getAllProyects();
  })
 

  }

 // connect angular with rest api 
  getAllProyects(){
    (this.proyectService.getAllProyects(this.UserId)).subscribe(data => {
      this.projects = data;
     })
    }

 }
