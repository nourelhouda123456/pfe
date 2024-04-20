import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-participation-liee',
  templateUrl: './participation-liee.component.html',
  styleUrls: ['./participation-liee.component.css']
})
export class ParticipationLieeComponent   {

  showInput: boolean = false;
  stepTwoForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.stepTwoForm = this.formBuilder.group({
      description: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
      RaisonSociale: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z]*$') // Only alphanumeric characters
        ]
      ],
      PourcentageDetentionDroitsVote: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{1,2}(\.\d{1,2})?$/)
        ]
      ],
      PourcentageDetentionCapital: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{1,2}(\.\d{1,2})?$/)
        ]
      ]
    });
  }
  

  get f(): { [key: string]: AbstractControl } {
    return this.stepTwoForm.controls;
  }

  

  onReset(): void {
    this.submitted = false;
    this.stepTwoForm.reset();
  }

 

 Submit(){}
 


  onCheckboxChange(event: any) {
    if (event.source.value === 'autreQualite') {
      this.showInput = event.checked;
    }
  }

  

 

  onSubmit(): void {
    this.submitted = true;

    if (this.stepTwoForm.invalid) {
      return;
    }}
  
}



