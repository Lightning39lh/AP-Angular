import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/models/Education';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];
  editForm: FormGroup;
  UserId: number;
  private deleteId: number;
  constructor(private educationService: EducationService, private modalService: NgbModal,
               private aS: AuthenticationService, private fb: FormBuilder, public httpClient:HttpClient) { }

  ngOnInit(): void {
   


   this.editForm = this.fb.group({
    id: [''],
    title: [''],
    description: [''],
    place:['']
  });

   var currentUser = this.aS.AuthenticatedUser;
   this.educationService.getId(currentUser.username).subscribe(data => {
      this.UserId = data;
      this.getAllEducations();
    })
 

  }

 // connect angular with rest api 
  getAllEducations(){
    (this.educationService.getAllEducations(this.UserId)).subscribe(data => {
      this.educations = data;
     })
    }

    
openAdd(targetModal) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
    });
 }

openEdit(targetModal, education:Education) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  console.log(education);
      this.editForm.patchValue( {
        id: education.id,
        title: education.title,
        description: education.description, 
        place:education.place   
      });
      console.log(this.editForm.value);
    }
    
  openDelete(targetModal, education:Education) {
    this.deleteId = education.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  

  onAdd(){
  this.UserId;
    this.educationService.addEducation(this.editForm.value,this.UserId).subscribe(data => {console.log("se agrego bien");
    location.reload();
    });
   
  }

  onEdit(){
    console.log(this.editForm.value);
    this.educationService.editEducation(this.editForm.value,this.UserId).subscribe(data => {
      console.log("se edito bien");
      location.reload();
  });
  
  }
 
  onDelete(){
    this.educationService.deleteEducation(this.deleteId).subscribe(data => {console.log("se elimino bien");
    location.reload();
  });
  
 }
}
