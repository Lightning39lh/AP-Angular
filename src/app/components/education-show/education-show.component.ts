import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/models/Education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-show',
  templateUrl: './education-show.component.html',
  styleUrls: ['./education-show.component.css']
})
export class EducationShowComponent implements OnInit {
  username:string;
  educations: Education[] = [];
  constructor(private educationService: EducationService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get("username")
   this.getAllEducations();
 

  }

 // connect angular with rest api 
  async getAllEducations(): Promise<void> {
    (await this.educationService.getAllEducationsPublic(this.username)).subscribe(data => {
      this.educations = data;
     })
    }
}
