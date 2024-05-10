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
import { InfoED } from './models/InfoDeclaration';
import { ParticipationLiee } from './models/ParticipationLiee';
import { ParticipationDeclarante } from './models/ParticipationDeclarante';
import { InfoGE } from './models/InfoGE';
import { ActifIncorporel } from './models/AcrifIncorporel';
import { ActifCorporel } from './models/ActifCorporel';
import { RestructurationsGE } from './models/RestructurationsGE';
import { ValeurExploitation } from './models/ValeurExploitation';
import { RemunerationsBiens } from './models/RemunerationsBiens';
import { Service } from './models/Service';
import { PretAccorde } from './models/PretAccorde';
import { AutreOperation } from './models/AutreOperation';
import { CessionAcquisitionActif } from './models/CessionAcquisitionActif';
import { Financiere } from './models/Financiere';
import { EmpruntContracte } from './models/EmpruntContracte';
import { DescriptionTransactionsRegimeFiscalPrivilegie } from './models/DescriptionTransactionsRegimeFiscalPrivilegie';
import { AutreInfoARenseigner } from './models/AutreInfoARenseigner';
import { ContrepartieNonMonetaire } from './models/ContrepartieNonMonetaire';
import { OperationsAccordsPrealables } from './models/OperationsAccordsPrealables';
import { BiensOuServicesSansContrePartie } from './models/BiensOuServicesSansContrePartie';
import { ModifLienC } from './models/ModifLienC';
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


  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${userId}`);
  }




 

  createInfoDeclaration(newInfoDeclaration: InfoED, declarationId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/infoEntreprise/entreprise/${declarationId}`, newInfoDeclaration, requestOptions);
  }
  
 


  updateUser(user: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, user);
  }
  


  
  createParticipationLiee(newParticipationLiee: ParticipationLiee ,participationLieeId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/ParticipartionLiee/${participationLieeId}`, newParticipationLiee, requestOptions);

   
  }



  createParticipationDeclarante(newParticipationDeclarante: ParticipationDeclarante ,participationDeclaranteId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/ParticipartionDeclarante/${participationDeclaranteId}`, newParticipationDeclarante, requestOptions);

   
  }



  createModifLienC(newModifLienC: ModifLienC ,ModifLienCId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/ModifLienCapital/${ModifLienCId}`, newModifLienC, requestOptions);

   
  }

  createInfoGE(newInfoGE: InfoGE ,InfoGEId: number): Observable<any> {
    console.log("test3" +InfoGEId)

    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/infoGroupeEntreprise/${InfoGEId}`, newInfoGE, requestOptions);

   
  }

 


  createActifIncorporel(newAI: ActifIncorporel ,ACId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/ActifIncorporel/${ACId}`, newAI, requestOptions);

   
  }


  createActifCorporel(newAC: ActifCorporel ,ACId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/ActifCorporel/${ACId}`, newAC, requestOptions);

   
  }

  createRestructurationGE(newRestructurationGE: RestructurationsGE ,RestructurationGEId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/RestructurationGroupeEntreprise/${RestructurationGEId}`, newRestructurationGE, requestOptions);

   
  }

  createValeurExploitation(newValeurExploitation: ValeurExploitation ,ValeurExploitationId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/valeurExploitation/${ValeurExploitationId}`, newValeurExploitation, requestOptions);

   
  }

  createRemunerationsBiens(newRemunerationsBiens: RemunerationsBiens ,RemunerationsBiensId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/RemunerationsBiens/${RemunerationsBiensId}`, newRemunerationsBiens, requestOptions);

   
  }





  createService(newService: Service ,ServiceId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/services/${ServiceId}`, newService, requestOptions);

   
  }



  createFinanciere(newFinanciere: Financiere ,FinanciereId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/operationFinanciere/${FinanciereId}`, newFinanciere, requestOptions);

   
  }



  createCessionAcquisitionActif(newCessionAcquisitionActif: CessionAcquisitionActif ,CessionAcquisitionActifId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/cessionAcquisitionActif/${CessionAcquisitionActifId}`, newCessionAcquisitionActif, requestOptions);

   
  }









  createAutreOperation(newAutreOperation: AutreOperation ,AutreOperationId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/autresOperation/${AutreOperationId}`, newAutreOperation, requestOptions);

   
  }



  
  createPretAccorde(newPretAccorde: PretAccorde ,PretAccordeId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/pretAccorde/${PretAccordeId}`, newPretAccorde, requestOptions);

   
  }




  createEmpruntContracte(newEmpruntContracte: EmpruntContracte ,EmpruntContracteId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/empruntContracte/${EmpruntContracteId}`, newEmpruntContracte, requestOptions);

   
  }
  

  createDescriptionTransactionsRegimeFiscalPrivilegie(newDescriptionTransactionsRegimeFiscalPrivilegie: DescriptionTransactionsRegimeFiscalPrivilegie ,DescriptionTransactionsRegimeFiscalPrivilegieId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/descriptionTransactionsRegimeFiscalPrivilegie/${DescriptionTransactionsRegimeFiscalPrivilegieId}`, newDescriptionTransactionsRegimeFiscalPrivilegie, requestOptions);

   
  }




  createAutreInfoARenseigner(newAutreInfoARenseigner: AutreInfoARenseigner ,AutreInfoARenseignerId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/autreInfo/${AutreInfoARenseignerId}`, newAutreInfoARenseigner, requestOptions);

   
  }



  createBiensOuServicesSansContrePartie(newBiensOuServicesSansContrePartie: BiensOuServicesSansContrePartie ,BiensOuServicesSansContrePartieId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/biens-sans-contrepartie/${BiensOuServicesSansContrePartieId}`, newBiensOuServicesSansContrePartie, requestOptions);

   
  }

  createContrepartieNonMonetaire(newContrepartieNonMonetaire: ContrepartieNonMonetaire ,ContrepartieNonMonetaireId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/contrepartie/${ContrepartieNonMonetaireId}`, newContrepartieNonMonetaire, requestOptions);

   
  }


  createOperationsAccordsPrealables(newOperationsAccordsPrealables: OperationsAccordsPrealables ,OperationsAccordsPrealablesId: number): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.baseUrl}/operationsAccords/${OperationsAccordsPrealablesId}`, newOperationsAccordsPrealables, requestOptions);

   
  }


  getXmlData(declarationId: number): Observable<string> {
    return this.http.get(`${this.baseUrl}/generateXml/${declarationId}`, { responseType: 'text' });
  }
}
