import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'angular-adv-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _settings: SettingsService) { }

  ngOnInit(): void {
    this.changeCheck();
  }

  changeColor(teme: string, link: any){
    console.log(teme);
    this.setCheck(link);
    this._settings.setTheme(teme);
  }

  setCheck(link: any){
    let selectores:any = document.getElementsByClassName('selector');
    for(let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  changeCheck(){
    let selectores: any = document.getElementsByTagName('a');
    for(let ref of selectores){
      if (ref.getAttribute('data-theme') === this._settings.settings.theme){
        ref.classList.add('working');
        break;
      }
    }
  }

}
