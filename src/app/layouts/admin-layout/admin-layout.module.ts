import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
 
 
 
import { NotificationsComponent } from '../../notifications/notifications.component';
 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { Step1Component } from 'app/stepper/step1/step1.component';
import { FormComponent } from 'app/stepper/form/form.component';
import { Step2Component } from 'app/stepper/step2/step2.component';
 
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { DeclarationComponent } from 'app/InfoEntrepriseDéclarante/declaration/declaration.component';
import { InfoEDComponent } from 'app/InfoEntrepriseDéclarante/info-ed/info-ed.component';
import { InfoGEComponent } from 'app/InfoGroupeEntreprise/info-ge/info-ge.component';
import { InfoOpComponent } from 'app/InformationOpération/info-op/info-op.component';
import { AutreInfoComponent } from 'app/autreInformation/autre-info/autre-info.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CompteComponent } from 'app/compte/compte.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ParticipationLieeComponent } from 'app/InfoEntrepriseDéclarante/participation-liee/participation-liee.component';
 
 


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatStepperModule,
    CdkStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule
     
  ],
  declarations: [
     DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    FormComponent,
    Step2Component,
    Step1Component,
    NotificationsComponent,
    DeclarationComponent,
    InfoEDComponent,
    InfoGEComponent,
    InfoOpComponent,
    AutreInfoComponent,
    CompteComponent,
   ParticipationLieeComponent
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class AdminLayoutModule {}
