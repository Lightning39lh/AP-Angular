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
  constructor(private skillService: SkillService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get("username")
   this.getAllSkills();
 

  }

 // connect angular with rest api 
  async getAllSkills(): Promise<void> {
    (await this.skillService.getAllSkillsPublic(this.username)).subscribe(data => {
      this.skills = data;
     })
    }
}
