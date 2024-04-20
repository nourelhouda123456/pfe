import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CompteComponent } from './compte/compte.component';
import { ViewComponent } from './view/view.component';
 


 
 

const routes: Routes =[

  {path: 'SignUp', component: SignUpComponent},
  {path: 'view', component: ViewComponent},
   
  {
    path: '',
    redirectTo: 'SignUp',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
