import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Declaration } from 'app/models/Declaration';
import { Entreprise } from 'app/models/entreprise';
import { ServiceService } from 'app/service.service';
 

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent {

  stepOneForm: FormGroup = new FormGroup({
    natureDateFin: new FormControl(''),
    dateDebut: new FormControl(''),
    Exercice: new FormControl(''),
    
  });

  submitted = false;

 
   

  constructor(private formBuilder: FormBuilder,
    private serviceService: ServiceService,
     private router: Router,
      private declarationService: ServiceService,
      private entrepriseService: ServiceService ) {}

  
 

  userId: number;
  entreprise: Entreprise;




  
  
 

  ngOnInit(): void {
    const user = JSON.parse(this.getCookie('user'));
    this.userId = user?.id;


    this.stepOneForm = this.formBuilder.group({
      Declaration: ['', Validators.required],
      chiffreAffaireAnnuel: ['', [
        Validators.required,
        Validators.pattern(/^\d{1,13}(?:\.\d{1,3})?$/),
        Validators.max(9999999999999.999),
        Validators.min(0)
      ]],
      Exercice: ['', [
        Validators.required,
        Validators.min(1000),
        Validators.max(9999),
        Validators.pattern('^[0-9]{1,4}$')
      ]],
      dateDebut: ['', [
        Validators.required,
        Validators.pattern(/^((31\/(0[13578]|1[02])\/(20[2-9][0-9]))|((0[1-9]|[12][0-9]|30)\/(0[13456789]|1[012])\/(20[2-9][0-9]))|((0[1-9]|[12][0-8])\/02\/(20[2-9][0-9]))|(29\/02\/(20(([2468][048])|([02468][48])|([13579][26])))))$/)
      ]],
      dateFinExercice: ['', [
        Validators.required,
        Validators.pattern(/^((31\/(0[13578]|1[02])\/(20[2-9][0-9]))|((0[1-9]|[12][0-9]|30)\/(0[13456789]|1[012])\/(20[2-9][0-9]))|((0[1-9]|[12][0-8])\/02\/(20[2-9][0-9]))|(29\/02\/(20(([2468][048])|([02468][48])|([13579][26])))))$/)
      ]],
      natureDateFin: ['', Validators.required]
    });

    
  }


  onSubmit(): void {
    this.submitted = true;

  
    if (this.stepOneForm.invalid) {
      return;
    }
  
    
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


  
  get f(): { [key: string]: AbstractControl } {
    return this.stepOneForm.controls;
  }

 


  stepOneSubmit(): void {
    this.submitted = true;
  
    if (this.stepOneForm.invalid) {
      return;
    }
   // Step 1: Get the user ID from cookies
   const userId = JSON.parse(this.getCookie('user')).id;
  
   // Step 2: Use the user ID to fetch the entreprise ID associated with the user
   this.entrepriseService.getEntrepriseByUserId(userId).subscribe(
     (entrepriseData: any) => {
       const entrepriseId = entrepriseData.id;

 
       // Step 4: Create the declaration object with the form values
       const newDeclaration: Declaration = {
        exercice: this.stepOneForm.get('Exercice')?.value.toString(),
        typedeclaration: this.stepOneForm.get('Declaration')?.value === 'P' ? 'P' : 'D',
        dateDebut: this.stepOneForm.get('dateDebut')?.value,
        dateFin: this.stepOneForm.get('dateFinExercice')?.value,
        naturedateFin: this.stepOneForm.get('natureDateFin')?.value.toString(),
        entreprise: entrepriseId
      };

 
       // Step 5: Call the service method to create the declaration
       this.declarationService.createDeclaration(newDeclaration, entrepriseId).subscribe(
         (data: any) => {
           console.log('Declaration created:', data);
           // Optionally, navigate to a success page or show a success message
         },
         error => {
           console.error('Error creating declaration:', error);
           console.log('hhhhhhhhhhhh:', newDeclaration);
         }
       );
     },
     error => {
       console.error('Error fetching entreprise:', error);
     }
   );
   
}














onReset(): void {
  this.submitted = false;
  this.stepOneForm.reset();
}
}