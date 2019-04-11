import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'app/shared/constants';
import { HomeComponent } from '../core/home/home.component';


@NgModule({  
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: AppRoutes.HOME, pathMatch: 'full' },
      { path: AppRoutes.HOME, component: HomeComponent}
    ])
  ],  
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
