import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
 
 
import { NotificationsComponent } from '../../notifications/notifications.component';
import { FormComponent } from 'app/stepper/form/form.component';
import { Step1Component } from 'app/stepper/step1/step1.component';
import { Step2Component } from 'app/stepper/step2/step2.component';
 
import { SignUpComponent } from 'app/auth/sign-up/sign-up.component';
import { DeclarationComponent } from 'app/InfoEntrepriseDéclarante/declaration/declaration.component';
import { InfoOpComponent } from 'app/InformationOpération/info-op/info-op.component';
import { CompteComponent } from 'app/compte/compte.component';
import { ParticipationLieeComponent } from 'app/InfoEntrepriseDéclarante/participation-liee/participation-liee.component';
 
 

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'form',  component: FormComponent },
    { path: 'step',  component: Step1Component },
    { path: 'step2',  component: Step2Component },
    
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'declaration',  component: DeclarationComponent },
    { path: 'op',  component: InfoOpComponent },
    { path: 'compte',  component: CompteComponent },
    { path: 'ParticipationLiee',  component: ParticipationLieeComponent },
    
     
];
