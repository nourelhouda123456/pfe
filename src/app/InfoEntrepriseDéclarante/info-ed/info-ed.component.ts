import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-info-ed',
  templateUrl: './info-ed.component.html',
  styleUrls: ['./info-ed.component.css']
})
export class InfoEDComponent   {
  showInput: boolean = false;
  stepTwoForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
     private router: Router
  ) {}


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
      
      
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.stepTwoForm.controls;
  }

  

  onReset(): void {
    this.submitted = false;
    this.stepTwoForm.reset();
  }

 



  
  











 


  
 task: Task = {
  name: 'Indeterminate',
  completed: false,
  color: 'primary',
};

allComplete: boolean = false;

updateAllComplete() {
  this.allComplete = this.task.completed;
}

someComplete(): boolean {
  return this.task.completed && !this.allComplete;
}

setAll(completed: boolean) {
  this.allComplete = completed;
  this.task.completed = completed;
}

  

  
  stepTwoSubmit(){}
 


  onCheckboxChange(event: any) {
    if (event.source.value === 'autreQualite') {
      this.showInput = event.checked;
    }
  }

  

  
showTextArea: boolean = false;
textAreaValue: string = '';

toggleTextArea() {
    this.showTextArea = !this.showTextArea;
}
 

    onSubmit(): void {
      this.submitted = true;
  
      if (this.stepTwoForm.valid) {
        // Navigate to another component
        this.router.navigate(['/form']); // Replace 'your-other-component' with the route path of the component you want to navigate to
      }
    }
  
}


