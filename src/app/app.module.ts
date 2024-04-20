import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
 
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MatMenuModule } from '@angular/material/menu';
import { CompteComponent } from './compte/compte.component';
import { MatIconModule } from '@angular/material/icon';
import { ViewComponent } from './view/view.component';
 
 
 

 


 

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    CommonModule,
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,

    BrowserModule,
    AppRoutingModule, 
      
   
     
    
    MatInputModule,
   
   
    MatStepperModule,
    CdkStepperModule,
  
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    AsyncPipe, 
    MatCheckboxModule,
    MatRadioModule,






    
    
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignUpComponent,
    ViewComponent,
    
   
   
    
     
    
    
     
   
   
 
   
   
    
    
     
 
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class AppModule { }
