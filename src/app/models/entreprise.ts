export interface Entreprise {
    matriculeFiscal: string;
    raisonSociale: string;
    formeJuridique: string;
    nationalite: string;
    adresseSiegeSocialEtablissementTunisie: string;
    codePostal: string;
    
    codeCategorie: string;
    codeTVA: string;
    activitePrincipale: string;
    activiteSecondaire?: string; // Optional
    declarations:null
  }
  