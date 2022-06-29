import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  username:string;
  experiences: Experience[] = [];
  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
   this.getAllExperiences();
  }
  
 // connect angular with rest api 
  async getAllExperiences(): Promise<void> {

    (await this.experienceService.getAllExperiencesPrivate()).subscribe(data => {
      this.experiences = data;
     })
    }
 

}
