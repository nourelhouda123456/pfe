import { Component, OnInit } from '@angular/core';
 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component  {
   
  public stepOneForm: FormGroup;
  isTextareaDisabled: boolean = true;

  toggleTextarea(event: any) {
    this.isTextareaDisabled = event.target.value !== 'Oui';
  }
 
  

 
 
  stepOneSubmit() {
  }
}