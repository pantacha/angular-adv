import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    theme: 'default',
    themeUrl: 'assets/css/colors/default.css'
  }

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarStorage();
  }

  guardarStorage(){
    localStorage.setItem('settings', JSON.stringify(this.settings));
    console.log('guardando en el localstorage');


  }

  cargarStorage(){
    if(localStorage.getItem('settings')){
      this.settings = JSON.parse(localStorage.getItem('settings'));
      console.log('cargado del localstorage');
      this.setTheme(this.settings.theme);
    }else{
      console.log('default theme');
      this.setTheme(this.settings.theme);
    }
  }

  setTheme(teme: string){
    let url = `assets/css/colors/${teme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = teme;
    this.settings.themeUrl = url;
    this.guardarStorage();
  }

}

interface Settings{
  theme: string;
  themeUrl: string;
}
