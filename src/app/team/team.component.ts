import { Component, OnInit } from '@angular/core';
import  team  from './team.json';
import advisors from './advisors.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

public teams: {
  name: string;
  position: string;
  company: string;
}[] = team;

public advisors: {
  name: string;
  position: string;
  company: string;
}[] = advisors;

  constructor() { }

  ngOnInit(): void {

  }
  

}
