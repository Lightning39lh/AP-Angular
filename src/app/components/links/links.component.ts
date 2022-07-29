import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Link } from 'src/app/models/Link';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  link: Link= new Link("","");
  editForm: FormGroup;
  UserId: number;

  constructor(private linkService: LinkService,  private modalService: NgbModal, private aS: AuthenticationService, private fb: FormBuilder, public httpClient:HttpClient,private ruta:Router) { }

  ngOnInit(): void {
    
  

   this.editForm = this.fb.group({
    id: [''],
    linkedin: [''],
    github: ['']
  });
  //to edit uses
   var currentUser = this.aS.AuthenticatedUser;
   this.linkService.getId(currentUser.username).subscribe(data => {
      this.UserId = data;
      this.getAllLinks();
    })
  }

  getAllLinks(){
    (this.linkService.getAllLinks(this.UserId)).subscribe(data => {
      this.link=data;
     })
    }

openEdit(targetModal, link:Link) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  console.log(link);
      this.editForm.patchValue( {
        id: link.id,
        github: link.github,
        linkedin: link.linkedin,    
      });
    }

  onEdit(){
    console.log(this.editForm.value);
    this.linkService.editProject(this.editForm.value,this.UserId).subscribe(data => {console.log("se edito bien");
    location.reload();
  });
  
  }

  logout(){
    sessionStorage.clear();
    this.ruta.navigate(['/login']);
  }
}
