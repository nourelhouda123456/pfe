import { Entreprise } from "./entreprise";

export interface Declaration {
    id?: number;  
    exercice: string;
    typedeclaration: string;
    dateDebut: string;
    dateFin: string;
    codeActe: string;
    naturedateFin: string;
    entreprise?: any;  
  }
  