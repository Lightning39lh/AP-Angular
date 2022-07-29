import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-show',
  templateUrl: './experience-show.component.html',
  styleUrls: ['./experience-show.component.css']
})
export class ExperienceShowComponent implements OnInit {
  username:string;
  experiences: Experience[] = [];
  UserId: number;
  constructor(private experienceService: ExperienceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get("username")
    this.experienceService.getId(this.username).subscribe(data => {
      this.UserId = data;
      this.getAllExperiences();
    })
  }
  
 // connect angular with rest api 
  getAllExperiences(){

    (this.experienceService.getAllExperiences(this.UserId)).subscribe(data => {
      this.experiences = data;
     })
    }
 

}
