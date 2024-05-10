import { Component, OnInit } from '@angular/core';
import { Service } from 'app/models/Service';
import { ServiceService } from 'app/service.service';
import { SharedServiveService } from 'app/shared-servive.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  xmlContent: string = '';
 
  constructor(private xmlDataService: ServiceService,
    private shared: SharedServiveService

  ) { }

  ngOnInit(): void {
    const idDeclaration = this.shared.getData(); 
console.log(idDeclaration)
     this.xmlDataService.getXmlData(idDeclaration).subscribe(
      data => this.xmlContent = data,
      error => console.error('Error fetching XML:', error)
    );
  }

}
