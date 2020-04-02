import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'angular-adv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public _settings: SettingsService) {}

}
