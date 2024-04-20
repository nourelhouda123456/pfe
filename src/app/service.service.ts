import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './User';
import { credentials } from './models/Credentials';
import { Entreprise } from './models/entreprise';
import { loginResponse } from './models/LoginResponse';
import { ResponseEntreprise } from './models/ResponseEntreprise';
import { Declaration } from './models/Declaration';
 // Import the Entreprise model

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // Update the URL with your Spring Boot app's base URL
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
   
  }

 
  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(user: credentials): Observable<loginResponse> {
    return this.http.post<loginResponse>(`${this.baseUrl}/login`, user);
  }

  createEntreprise(entreprise: Entreprise, userId: number): Observable<Entreprise> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Entreprise>(`${this.baseUrl}/entreprise/${userId}`, entreprise, requestOptions);
  }


  getEntrepriseByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/entreprise/user/${userId}`;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    console.log('Fetching entreprise from URL:', url);
    console.log('Headers:', headers);
  
    return this.http.get<ResponseEntreprise>(url, { headers: headers }).pipe(
      catchError(error => {
        console.error('Error fetching entreprise:', error);
        return throwError(error);
      })
    );
  }
  

  createDeclaration(newDeclaration: Declaration, entrepriseId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/declaration/${entrepriseId}`, newDeclaration, requestOptions);
  }
  

  getDeclarationsByEntreprise(entrepriseId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/entreprise/declaration/${entrepriseId}`);
  }



  deleteDeclarationById(id: number) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(`${this.baseUrl}/declaration/delete-type-p/${id}`,requestOptions);
  }



  


  getDeclarationByExercice(exercice: string): Observable<Declaration> {
    const url = `${this.baseUrl}/declaration/Exercice/${exercice}`;
    return this.http.get<Declaration>(url);
  }
  

  getDeclarationById(id: number): Observable<Declaration> {
    const url = `${this.baseUrl}/declaration/${id}`;
    return this.http.get<Declaration>(url);
  }

 

}
