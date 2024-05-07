import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiveService {

  constructor() {
    
  }

  data:any


  setData(data) {
    this.data = data;
  }


  getData(){
    return this.data
  }



}
