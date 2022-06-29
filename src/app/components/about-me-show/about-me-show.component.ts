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
  person: Person= new Person("","","","")
  constructor(private personService: AboutMeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get("username")
   this.getAllPersons();
 

  }

 // connect angular with rest api 
  async getAllPersons(): Promise<void> {
    (await this.personService.getAllPersons(this.username)).subscribe(data => {
      this.person = data;
     })
    }

}
