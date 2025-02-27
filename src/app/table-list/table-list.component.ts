import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Declaration } from 'app/models/Declaration';
import { Entreprise } from 'app/models/entreprise';
import { ServiceService } from 'app/service.service';
import { SharedServiveService } from 'app/shared-servive.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  declarations: Declaration[] = [];
  userId: number;
  entrepriseId: number;

  constructor(private serviceService: ServiceService,
     private router: Router, private entrepriseService: ServiceService,
     private shared: SharedServiveService
    ) { }
  ngOnInit(): void {
    // Get userId from cookie
    const user = JSON.parse(this.getCookie('user'));
    this.userId = user?.id;
  
    // Fetch enterprise data
    this.entrepriseService.getEntrepriseByUserId(this.userId).subscribe(
      (data: any) => {
        this.entrepriseId = data.id;
        console.log("entreprise id :" + this.entrepriseId);
  
        // Fetch Declaration data
        this.serviceService.getDeclarationsByEntreprise(this.entrepriseId).subscribe(
          (data: any) => {
            this.declarations = data;
            console.log(this.declarations);
          },
          error => {
            console.error('Error fetching declarations:', error);
          }
        );
      },
      error => {
        console.error('Error fetching entreprise:', error);
      }
    );
  }
  
  deleteDeclaration(id: number): void {
    this.serviceService.deleteDeclarationById(id).subscribe(
      (response:any) => {
        console.log("mabrouuuuuk aliik"); 
        this.loadDeclarationsByEntreprise(this.entrepriseId)
      },
      error => {
        console.error('Error deleting declaration:', error);
      }
    );
  }


  searchQuery: string = '';

  

  onSearch(): void {
    if (this.searchQuery.trim() === '') {
    
      this.loadDeclarationsByEntreprise(this.entrepriseId);
    } else {
   
      this.declarations = this.declarations.filter(
        declaration => declaration.exercice.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }








  getDeclarationByIdAndNavigate(id: number): void {
    this.serviceService.getDeclarationById(id).subscribe(
     (response: any) => {
      console.log("test"+this.entrepriseId);
      
        this.loadDeclarationsByEntreprise(this.entrepriseId);
  
        this.router.navigate(['/view', { id: id }]);
        console.log("idddddddd"+id);
        const idDeclaration = this.shared.setData(id); 

      },
      error => {
        console.error('Error fetching declaration:', error);
      }
    );
  }
  
  
  
  loadDeclarationsByEntreprise(id: number): void {
    this.serviceService.getDeclarationsByEntreprise(id).subscribe(
      data => {
        this.declarations = data;
      },
      error => {
        console.error('Error loading declarations:', error);
      }
    );
  }
  
  getCookie(name: string): string {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
  



 
  





 
  
 
  



  onSubmit(): void {
    // Handle form submission if needed
  }
}
