import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

 import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  imports: [
    CommonModule,
    
    MatMenuModule,
    ReactiveFormsModule
    
  ],
  declarations: [
     
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
     NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
