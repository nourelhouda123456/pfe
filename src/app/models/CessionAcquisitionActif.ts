export interface CessionAcquisitionActif {
    id?: number;  
    identifiantEntreprise: string;
    raisonSociale: string;
    qualiteEntreprise: string;
    achatsDepenses: string;
    ventesRevenus: string;
    natureOperationCessionAcquisitionActif: string;
    natureRelationEntreprise: string;
    methodePrixTransfert: string;
    changementMethodePrixTransfert: string;
    declaration?: any;
    
  }