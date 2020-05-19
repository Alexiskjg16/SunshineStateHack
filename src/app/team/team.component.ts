import { Component, OnInit } from '@angular/core';
import  team  from './team.json';

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

  constructor() { }

  ngOnInit(): void {

  }
  

}
