import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/app/models/Project';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProyectService } from '../../services/proyect.service';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})

  
export class ProyectsComponent implements OnInit {


  projects: Project[] = [];
  editForm: FormGroup;
  UserId: number;
  project: Project = new Project ("","","");
  private deleteId: number;


  constructor(private proyectService: ProyectService,  private modalService: NgbModal, private aS: AuthenticationService, private fb: FormBuilder, public httpClient:HttpClient) { }

  ngOnInit(): void {
   
   this.getAllProyects();

   this.editForm = this.fb.group({
    id: [''],
    title: [''],
    description: [''],
    link:['']
  });

   var currentUser = this.aS.AuthenticatedUser;
   this.proyectService.getId(currentUser.username).subscribe(data => {
      this.UserId = data;
    })
    console.log(this.UserId);
  }

 // connect angular with rest api 
  async getAllProyects(): Promise<void> {
    (await this.proyectService.getAllProyects()).subscribe(data => {
      this.projects = data;
     })
    }

openEdit(targetModal, project:Project) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  console.log(project);
      this.editForm.patchValue( {
        id: project.id,
        title: project.title,
        description: project.description,
        link:project.link       
      });
      console.log(this.editForm.value);
    }
    
  openDelete(targetModal, project:Project) {
    this.deleteId = project.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  addProject(project: Project){
  this.UserId;
    this.proyectService.addProject(project,this.UserId).subscribe(data => {console.log("se agrego bien");
    });
    location.reload();
  }

  onEdit(){
    console.log(this.editForm.value);
    this.proyectService.editProject(this.editForm.value,this.UserId).subscribe(data => {console.log("se edito bien");
  });
  location.reload();
  }
 
 }
