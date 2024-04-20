import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeclarationComponent } from 'app/InfoEntrepriseDéclarante/declaration/declaration.component';
import { ServiceService } from 'app/service.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent   {



   

  @ViewChild(DeclarationComponent) declarationComponent:  DeclarationComponent;
  
  declarationData: any; // Declare a variable to hold the fetched data

  constructor( private route: ActivatedRoute,
    private declarationService: ServiceService 
  ) {}




 










  public stepOneForm: FormGroup;
  isTextareaDisabled: boolean = true;

  toggleTextarea(event: any) {
    this.isTextareaDisabled = event.target.value !== 'Oui';
  }
 
 
  

 
 
  stepOneSubmit() {
  }

 
  
  

}
