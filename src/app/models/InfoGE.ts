export interface InfoGE {
    id?: number; // Optional as it will be generated by the backend
    identifiantEntreprise: string;
    raisonSociale: string;
    adresseSiegeSocial: string;
    descriptionPrincipalesActivites: string;
    descriptionGeneralePolitiquePrixTransfert: string; // Assuming this will be handled separately
    declaration?: any;
  }
  