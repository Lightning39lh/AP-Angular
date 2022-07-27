import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experience } from 'src/app/models/Experience';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  username:string;
  experiences: Experience[] = [];
  editForm: FormGroup;
  UserId: number;
  private deleteId: number;

  constructor(private experienceService: ExperienceService, private modalService: NgbModal, private aS: AuthenticationService, private fb: FormBuilder, public httpClient:HttpClient) { }

  ngOnInit(): void {
   this.getAllExperiences();

   this.editForm = this.fb.group({
    id: [''],
    company: [''],
    description: [''],
    position:['']
  });

   var currentUser = this.aS.AuthenticatedUser;
   this.experienceService.getId(currentUser.username).subscribe(data => {
      this.UserId = data;
    })
  }
  
 // connect angular with rest api 
  async getAllExperiences(): Promise<void> {

    (await this.experienceService.getAllExperiencesPrivate()).subscribe(data => {
      this.experiences = data;
     })
    }
 
    
openAdd(targetModal) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
    });
 }

openEdit(targetModal, experience:Experience) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  console.log(experience);
      this.editForm.patchValue( {
        id: experience.id,
        company: experience.company,
        description: experience.description,
        position:experience.position       
      });
      console.log(this.editForm.value);
    }
    
  openDelete(targetModal, project:Experience) {
    this.deleteId = project.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  

  onAdd(){
  this.UserId;
    this.experienceService.addExperience(this.editForm.value,this.UserId).subscribe(data => {console.log("se agrego bien");
    });
    location.reload();
  }

  onEdit(){
    console.log(this.editForm.value);
    this.experienceService.editExperience(this.editForm.value,this.UserId).subscribe(data => {
      console.log("se edito bien");
  });
  location.reload();
  }
 
  onDelete(){
    this.experienceService.deleteExperience(this.deleteId).subscribe(data => {console.log("se elimino bien");
  });
  location.reload();
 }

}
