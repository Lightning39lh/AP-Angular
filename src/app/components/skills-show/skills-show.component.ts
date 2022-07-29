import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/models/Skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills-show',
  templateUrl: './skills-show.component.html',
  styleUrls: ['./skills-show.component.css']
})
export class SkillsShowComponent implements OnInit {
  username:string;
  skills: Skill[] = [];
  UserId: number;
  constructor(private skillService: SkillService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get("username")
    this.skillService.getId(this.username).subscribe(data => {
      this.UserId = data;
      this.getAllSkills();
    })
 

  }

 // connect angular with rest api 
  getAllSkills() {
    (this.skillService.getAllSkills(this.UserId)).subscribe(data => {
      this.skills = data;
     })
    }
}
