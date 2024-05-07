import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeclarationComponent } from 'app/InfoEntrepriseDéclarante/declaration/declaration.component';
import { Entreprise } from 'app/models/entreprise';
import { ServiceService } from 'app/service.service';
import { SharedServiveService } from 'app/shared-servive.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent   implements OnInit {

  

   

  @ViewChild(DeclarationComponent) declarationComponent:  DeclarationComponent;
  
  declarationData: any; // Declare a variable to hold the fetched data

  constructor( private route: ActivatedRoute,
    private EntrepriseService: ServiceService ,
  
  ) {}

  check: boolean = true;
  

  entreprise: Entreprise;
  userId: number;

  ngOnInit(): void {
    const user = JSON.parse(this.getCookie('user'));
    this.userId = user?.id;
    
    
     // get entreprise data
     this.EntrepriseService.getEntrepriseByUserId(this.userId).subscribe(
      (data: Entreprise) => {
        this.entreprise = data;
        
        this.check = true;  
         
      },
      error => {
        console.error('Error fetching entreprise:', error);
       
        this.check = false;
       
      }
    );
  }


  

  private getCookie(name: string) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }









  public stepOneForm: FormGroup;
  isTextareaDisabled: boolean = true;

  toggleTextarea(event: any) {
    this.isTextareaDisabled = event.target.value !== 'Oui';
  }
 
 
  

 
 
  stepOneSubmit() {
  }

 
  
  

}
