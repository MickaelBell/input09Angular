import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developper.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  myDeveloper: Developer;

  constructor() { }

  ngOnInit(): void {
    const devSkill = new Skill();
    devSkill.techName = 'Angular';
    devSkill.site = "https://angular.io/";
    devSkill.logo = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
    console.log(devSkill);

    this.myDeveloper = new Developer();
    this.myDeveloper.firstName = 'John';
    this.myDeveloper.lastName = 'Doe';
    this.myDeveloper.age = 45;
    this.myDeveloper.sex = 'man';
    this.myDeveloper.bio = 'Ninja Developer';
    this.myDeveloper.skills = [devSkill];
  }

}
