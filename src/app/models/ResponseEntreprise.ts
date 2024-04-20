export interface ResponseEntreprise {
    id :number ;
    matriculeFiscal: string;
    raisonSociale: string;
    formeJuridique: string;
    nationalite: string;
    adresseSiegeSocialEtablissementTunisie: string;
    codePostal: string;
    codeActe: string;
    codeCategorie: string;
    codeTVA: string;
    activitePrincipale: string;
    activiteSecondaire?: string; // Optional
    declarations:null
  }
  