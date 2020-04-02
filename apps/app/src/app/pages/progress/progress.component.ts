import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-adv-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  title:string;
  progress1: number = 10;
  progress2: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

  changeValue1(event: number){
    this.progress1 = event;
  }

  changeValue2(event: number){
    this.progress2 = event;
  }

}
