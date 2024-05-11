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
    private shared: SharedServiveService,
    private declarationService: ServiceService,
    

  ) { }

  ngOnInit(): void {
    const idDeclaration = this.shared.getData(); 
    console.log(idDeclaration);
  
    this.xmlDataService.getXmlData(idDeclaration).subscribe(
      data => {
        this.xmlContent = data;
        this.shared.setxmlContent(data);
      },
      error => {
        console.error('Error fetching XML:', error);
      }
    );
  }
  







  SaveXml(): void {
    const idDeclaration = this.shared.getData(); 
    this.declarationService.generateXml(idDeclaration, this.xmlContent).subscribe(
      (xmlData: string) => {
        console.log(xmlData);
      },
      (error) => {
        console.error('Failed to generate or save XML:', error);
      }
    );
  }


  DownloadXml(): void {
    const idDeclaration = this.shared.getData(); // Get the declaration ID from shared service.
    this.declarationService.generateXml(idDeclaration, this.xmlContent).subscribe(
      (xmlData: string) => {
        // Create a blob from the XML data.
        const blob = new Blob([xmlData], { type: 'application/xml' });
  
        // Create a download link for the blob.
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.setAttribute('download', 'download.xml'); // Name the file "download.xml".
  
        // Append the link to the body (required for Firefox).
        document.body.appendChild(downloadLink);
  
        // Simulate a click on the link to start the download.
        downloadLink.click();
  
        // Remove the link after downloading.
        document.body.removeChild(downloadLink);
      },
      (error) => {
        console.error('Failed to generate or save XML:', error);
      }
    );
  }
  
  
}
