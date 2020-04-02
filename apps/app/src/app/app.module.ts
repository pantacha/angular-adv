import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//Modules
//import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

//Routes
import { AppRoutingModule } from './app-routing.module';

//Services
import { ServiceModule } from './services/service.module';

//Components
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //PagesModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
