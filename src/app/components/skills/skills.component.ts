import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
   
   this.getAllSkills();
 

  }

 // connect angular with rest api 
  async getAllSkills(): Promise<void> {
    (await this.skillService.getAllSkills()).subscribe(data => {
      this.skills = data;
     })
    }
}
