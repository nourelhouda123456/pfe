export interface Financiere {
    id?: number;  
    identifiantEntreprise: string;
    raisonSociale: string;
    qualiteEntreprise: string;
    achatsDepenses: string;
    ventesRevenus: string;
    natureOperationFinanciere: string;
    natureRelationEntreprise: string;
    methodePrixTransfert: string;
    changementMethodePrixTransfert: string;
    declaration?: any;
    
  }