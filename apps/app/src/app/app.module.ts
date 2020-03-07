import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
//import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

//Routes
import { AppRoutingModule } from './app-routing.module';

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
