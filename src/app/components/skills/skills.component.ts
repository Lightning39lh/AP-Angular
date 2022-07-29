import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/models/Skill';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  editForm: FormGroup;
  UserId: number;
  skill: Skill = new Skill ("","");
  private deleteId: number;

  constructor(private skillService: SkillService,private modalService: NgbModal, private aS: AuthenticationService, private fb: FormBuilder, public httpClient:HttpClient) { }

  ngOnInit(): void {
   
   
   this.editForm = this.fb.group({
    id: [''],
    img:[''],
    title: ['']
  });
  var currentUser = this.aS.AuthenticatedUser;
  this.skillService.getId(currentUser.username).subscribe(data => {
     this.UserId = data;
     this.getAllSkills();
   })
 }


 // connect angular with rest api 
  /*async getAllSkills(): Promise<void> {
    (await this.skillService.getAllSkills()).subscribe(data => {
      this.skills = data;
     })
    }*/
       getAllSkills() {
        (this.skillService.getAllSkills(this.UserId)).subscribe(data => {
          this.skills = data;
        })
      }
  
openAdd(targetModal) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
    });
 }

openEdit(targetModal, skill:Skill) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  console.log(skill);
      this.editForm.patchValue( {
        id: skill.id,
        img: skill.img,
        title: skill.title,
      });
      console.log(this.editForm.value);
    }
  openDelete(targetModal, skill:Skill) {
    this.deleteId = skill.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }
  onAdd(){
    console.log(this.editForm.value);
    this.skillService.addSkill(this.editForm.value,this.UserId).subscribe(data => {
      console.log("se agrego bien");
    location.reload();
    });
    
  }
  onEdit(){
    console.log(this.editForm.value);
    this.skillService.editSkill(this.editForm.value,this.UserId).subscribe(data => {
      console.log("se edito bien");
      location.reload();
  });
  
  }
  onImgChanged(e){
    this.editForm.value.img =e[0].base64;
 }

  onDelete(){
    this.skillService.deleteSkill(this.deleteId).subscribe(data => {console.log("se elimino bien");
    location.reload();
  });
  
 }

}
