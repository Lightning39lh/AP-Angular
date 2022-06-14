import { Component, OnInit } from '@angular/core';
import { ProyectService } from '../../services/proyect.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})

  
export class ProyectsComponent implements OnInit {

  proyects: any;
  proyect2: any;
  constructor(private proyectService: ProyectService) { }

  ngOnInit(): void {
   this.getAllProyects();
   this.getProyect();
  }

 // connect angular with rest api 
  getAllProyects(): void {
    this.proyectService.getAllProyects().subscribe(data => {
      console.log(data);
      this.proyects = data;
     })
    }
    getProyect(): void {
      this.proyectService.getProyect(2).subscribe(data => {
        console.log(data);
        this.proyect2 = data;
       })
      }
 }
