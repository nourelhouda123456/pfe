import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-ge',
  templateUrl: './info-ge.component.html',
  styleUrls: ['./info-ge.component.css']
})
export class InfoGEComponent implements OnInit {

 
 
  public stepThreeForm: FormGroup;
  public showInputField: boolean = false;
  isTextareaDisabled: boolean = true;

 


  
  constructor() { }

  ngOnInit(): void {
  }
 
  
  


  toggleTextarea(event: any) {
    this.isTextareaDisabled = event.target.value !== 'Oui';
  }
 
  

 
 
  stepThreeSubmit() {
  }
}