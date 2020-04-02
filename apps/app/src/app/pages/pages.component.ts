import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'angular-adv-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
