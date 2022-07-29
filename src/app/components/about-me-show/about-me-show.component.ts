import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-about-me-show',
  templateUrl: './about-me-show.component.html',
  styleUrls: ['./about-me-show.component.css']
})
export class AboutMeShowComponent implements OnInit {
  username:string;
  person: Person= new Person("","","","","");
  UserId:number;
  constructor(private personService: AboutMeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get("username")
    this.personService.getId(this.username).subscribe(data => {
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

}
