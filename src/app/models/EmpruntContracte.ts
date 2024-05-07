export interface EmpruntContracte {
    id?: number;  
    identifiantEntreprise: string;
    raisonSociale: string;
    qualiteEntreprise: string;
    natureRelationEntreprise: string;
    soldeOuverture: string;
    devise: string;
    mouvementsAugmentations: string;
    mouvementsDiminutions: string;
    soldeCloture: string;
    empruntInterets: string;
    tauxInterets: string;
    declaration?: any;
    
  }