import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutreInfoARenseigner } from 'app/models/AutreInfoARenseigner';
import { ServiceService } from 'app/service.service';
import { SharedServiveService } from 'app/shared-servive.service';

@Component({
  selector: 'app-autre-info',
  templateUrl: './autre-info.component.html',
  styleUrls: ['./autre-info.component.css']
})
export class AutreInfoComponent   {

   
  
  stepFiveForm: FormGroup = new FormGroup({
    description: new FormControl(''),
    
    
  });

  submitted = false;
 
  
  constructor(private formBuilder: FormBuilder,
    private AutreInfoARenseignerService: ServiceService,
     private  shared: SharedServiveService,
        private declarationService: ServiceService,
) {}


    userId: number;
    ngOnInit(): void {
      const user = JSON.parse(this.getCookie('user'));
      this.userId = user?.id;
  
  
      this.stepFiveForm = this.formBuilder.group({
       
        description: ['', Validators.required]
      });
  
      
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
      return this.stepFiveForm.controls;
    }
  

    
 
 
    declarationId: number; 
    stepFiveSubmit(): void {
      const idDeclaration = this.shared.getData(); 
      this.submitted = true;
    
      if (this.stepFiveForm.invalid) {
        Object.keys(this.stepFiveForm.controls).forEach(key => {
          this.stepFiveForm.get(key).markAsTouched();
        });
        console.log("invalid");
        
        return;
      }
    
     
    const newAutreInfoARenseigner: AutreInfoARenseigner  = {
     
    description: this.stepFiveForm.get('description')?.value,
    declaration: this.declarationId  
    
    };
    
     
    this.AutreInfoARenseignerService.createAutreInfoARenseigner(newAutreInfoARenseigner, idDeclaration).subscribe(
    data => {
      console.log('AutreInfoARenseigner created:', data);
      
    
    
    },
    error => {
      console.error('Error creating AutreInfoARenseigner :', error);
    }
    );
    }






    xmlContent: string = '';



     
}
