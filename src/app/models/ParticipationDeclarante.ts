export interface ParticipationDeclarante {
  id?: number; // Optional as it will be generated by the backend
  identifiantEntreprise: string;
  raisonSociale: string;
  qualiteEntreprise: string;
  pourcentage_detention_capital: string;
  pourcentage_detention_droits_vote: string;
  declaration?: any;  

  
}