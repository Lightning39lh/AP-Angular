import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/Education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];
  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
   
   this.getAllEducations();
 

  }

 // connect angular with rest api 
  async getAllEducations(): Promise<void> {
    (await this.educationService.getAllEducations()).subscribe(data => {
      this.educations = data;
     })
    }
}
