import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/Person';
import { AboutMeService } from 'src/app/services/about-me.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  username: string;
  person: Person = new Person("", "", "", "", "");
  editForm: FormGroup;
  UserId: number;

  constructor(private personService: AboutMeService, private route: ActivatedRoute, private fb: FormBuilder, private aS: AuthenticationService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get("username")

    this.editForm = this.fb.group({
      id: [''],
      fullName: [''],
      degree: [''],
      img: [''],
      aboutMe: [''],
      banner: ['']
    });

    var currentUser = this.aS.AuthenticatedUser;
    this.personService.getId(currentUser.username).subscribe(data => {
      this.UserId = data;
      this.getAllPersons(this.UserId);
    })


  }

  // connect angular with rest api 
  getAllPersons(UserId:number) {
    (this.personService.getAllPersons(UserId)).subscribe(data => {
      this.person = data;
    })
  }

  openEdit(targetModal, person: Person) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id: person.id,
      fullName: person.fullName,
      degree: person.degree,
      img: person.img,
      aboutMe: person.aboutMe,
      banner:person.banner
    });
    console.log(this.editForm.value);
  }

  onEdit() {
    console.log(this.editForm.value);
    this.personService.editPerson(this.editForm.value, this.UserId).subscribe(data => {
      console.log("se edito bien");
      location.reload();
    });
  }

  onImgChanged(e){
     this.editForm.value.img =e[0].base64;
  }

  onBannerChanged(e){
    this.editForm.value.banner =e[0].base64;
 }

}
