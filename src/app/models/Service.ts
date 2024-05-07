export interface Service {
    id?: number;  
    identifiantEntreprise: string;
    raisonSociale: string;
    qualiteEntreprise: string;
    achatsDepenses: string;
    ventesRevenus: string;
    natureOperationService: string;
    natureRelationEntreprise: string;
    methodePrixTransfert: string;
    changementMethodePrixTransfert: string;
    declaration?: any;
    
  }