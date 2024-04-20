import { Component, OnInit } from '@angular/core';
 
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
 
})
export class Step2Component  implements OnInit {
  public stepTwoForm: FormGroup;
  public showInputField: boolean = false;


  constructor(private fb: FormBuilder) {
    this.stepTwoForm = this.fb.group({
      MatriculeFiscal: this.fb.control('', Validators.required),
      EtatTerritoire: this.fb.control('', Validators.required),
      RaisonSociale: this.fb.control('', Validators.required),
      PDC: this.fb.control('', Validators.required),
      PDD: this.fb.control('', Validators.required),
      autresInput: this.fb.control('' ),
      qualiteEntreprise: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
    // Subscribe to changes in the dropdown value
    this.stepTwoForm.get('qualiteEntreprise')?.valueChanges.subscribe(value => {
      // If value is "Autres", show the input field and set it as required; otherwise, hide it and clear its validators
      if (value === 'Autres') {
        this.showInputField = true;
        this.stepTwoForm.get('autresInput')?.setValidators([Validators.required]);
      } else {
        this.showInputField = false;
        this.stepTwoForm.get('autresInput')?.clearValidators();
      }
      // Update the validity of the input field
      this.stepTwoForm.get('autresInput')?.updateValueAndValidity();
    });
  }
  
    
    
    
   
  
  










  stepTwoSubmit() {
  }
}