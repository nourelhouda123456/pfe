import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiveService {

  constructor() {
    
  }

  data:any
  infoEDdata:any
  infoGEdata:any
  xmlContent:any
  setData(data) {
    this.data = data;
  }


  getData(){
    return this.data
  }


  setinfoEDdata(infoEDdata) {
    this.infoEDdata = infoEDdata;
  }


  getinfoEDdata(){
    return this.infoEDdata
  }




  
  setinfoGEdata(infoGEdata) {
    this.infoGEdata = infoGEdata;
  }


  getinfoGEdata(){
    return this.infoGEdata
  }

  setxmlContent(xmlContent) {
    this.xmlContent = xmlContent;
  }


  getxmlContent(){
    return this.xmlContent
  }
}
