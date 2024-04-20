import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    
    
}


export const ROUTES: RouteInfo[] = [
  { path: '/compte', title: 'Compte',  icon:'account_circle', class: '' },
  { path: '/dashboard', title: 'Créer Déclaration',  icon: 'dashboard', class: '' }, 
  { path: '/table-list', title: 'Liste déclaration',  icon:'content_paste', class: '' },

 
 
  
];


 


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
