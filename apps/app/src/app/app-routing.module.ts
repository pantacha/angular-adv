
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const routes: Routes = [
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: '**',
        component: NopagefoundComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {}