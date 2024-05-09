import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActifIncorporel } from 'app/models/AcrifIncorporel';
import { ActifCorporel } from 'app/models/ActifCorporel';
import { InfoGE } from 'app/models/InfoGE';
import { QualiteEntreprise } from 'app/models/QualiteEntreprise';
import { RestructurationsGE } from 'app/models/RestructurationsGE';
import { ServiceService } from 'app/service.service';
import { SharedServiveService } from 'app/shared-servive.service';

@Component({
  selector: 'app-info-ge',
  templateUrl: './info-ge.component.html',
  styleUrls: ['./info-ge.component.css']
})
export class InfoGEComponent implements OnInit {
  countries= [
    { code: 'AF', name: 'AFGHANISTAN' },
    { code: 'AX', name: 'ALAND ISLANDS' },
    { code: 'AL', name: 'ALBANIA' },
    { code: 'DZ', name: 'ALGERIA' },
    { code: 'AS', name: 'AMERICAN SAMOA' },
    { code: 'AD', name: 'ANDORRA' },
    { code: 'AO', name: 'ANGOLA' },
    { code: 'AI', name: 'ANGUILLA' },
    { code: 'AQ', name: 'ANTARCTICA' },
    { code: 'AG', name: 'ANTIGUA AND BARBUDA' },
    { code: 'AR', name: 'ARGENTINA' },
    { code: 'AM', name: 'ARMENIA' },
    { code: 'AW', name: 'ARUBA' },
    { code: 'AU', name: 'AUSTRALIA' },
    { code: 'AT', name: 'AUSTRIA' },
    { code: 'AZ', name: 'AZERBAIJAN' },
    { code: 'BS', name: 'BAHAMAS' },
    { code: 'BH', name: 'BAHRAIN' },
    { code: 'BD', name: 'BANGLADESH' },
    { code: 'BB', name: 'BARBADOS' },
    { code: 'BY', name: 'BELARUS' },
    { code: 'BE', name: 'BELGIUM' },
    { code: 'BZ', name: 'BELIZE' },
    { code: 'BJ', name: 'BENIN' },
    { code: 'BM', name: 'BERMUDA' },
    { code: 'BT', name: 'BHUTAN' },
    { code: 'BO', name: 'BOLIVIA, PLURINATIONAL STATE OF' },
    { code: 'BQ', name: 'BONAIRE, SINT EUSTATIUS AND SABA' },
    { code: 'BA', name: 'BOSNIA AND HERZEGOVINA' },
    { code: 'BW', name: 'BOTSWANA' },
    { code: 'BV', name: 'BOUVET ISLAND' },
    { code: 'BR', name: 'BRAZIL' },
    { code: 'IO', name: 'BRITISH INDIAN OCEAN TERRITORY' },
    { code: 'BN', name: 'BRUNEI DARUSSALAM' },
    { code: 'BG', name: 'BULGARIA' },
    { code: 'BF', name: 'BURKINA FASO' },
    { code: 'BI', name: 'BURUNDI' },
    { code: 'KH', name: 'CAMBODIA' },
    { code: 'CM', name: 'CAMEROON' },
    { code: 'CA', name: 'CANADA' },
    { code: 'CV', name: 'CABO VERDE' },
    { code: 'KY', name: 'CAYMAN ISLANDS' },
    { code: 'CF', name: 'CENTRAL AFRICAN REPUBLIC' },
    { code: 'TD', name: 'CHAD' },
    { code: 'CL', name: 'CHILE' },
    { code: 'CN', name: 'CHINA' },
    { code: 'CX', name: 'CHRISTMAS ISLAND' },
    { code: 'CC', name: 'COCOS (KEELING) ISLANDS' },
    { code: 'CO', name: 'COLOMBIA' },
    { code: 'KM', name: 'COMOROS' },
    { code: 'CG', name: 'CONGO' },
    { code: 'CD', name: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE' },
    { code: 'CK', name: 'COOK ISLANDS' },
    { code: 'CR', name: 'COSTA RICA' },
    { code: 'CI', name: 'COTE D\'IVOIRE' },
    { code: 'HR', name: 'CROATIA' },
    { code: 'CU', name: 'CUBA' },
    { code: 'CW', name: 'CURACAO' },
    { code: 'CY', name: 'CYPRUS' },
    { code: 'CZ', name: 'CZECHIA' },
    { code: 'DK', name: 'DENMARK' },
    { code: 'DJ', name: 'DJIBOUTI' },
    { code: 'DM', name: 'DOMINICA' },
    { code: 'DO', name: 'DOMINICAN REPUBLIC' },
    { code: 'EC', name: 'ECUADOR' },
    { code: 'EG', name: 'EGYPT' },
    { code: 'SV', name: 'EL SALVADOR' },
    { code: 'GQ', name: 'EQUATORIAL GUINEA' },
    { code: 'ER', name: 'ERITREA' },
    { code: 'EE', name: 'ESTONIA' },
    { code: 'ET', name: 'ETHIOPIA' },
    { code: 'FK', name: 'FALKLAND ISLANDS (MALVINAS)' },
    { code: 'FO', name: 'FAROE ISLANDS' },
    { code: 'FJ', name: 'FIJI' },
    { code: 'FI', name: 'FINLAND' },
    { code: 'FR', name: 'FRANCE' },
    { code: 'GF', name: 'FRENCH GUIANA' },
    { code: 'PF', name: 'FRENCH POLYNESIA' },
    { code: 'TF', name: 'FRENCH SOUTHERN TERRITORIES' },
    { code: 'GA', name: 'GABON' },
    { code: 'GM', name: 'GAMBIA' },
    { code: 'GE', name: 'GEORGIA' },
    { code: 'DE', name: 'GERMANY' },
    { code: 'GH', name: 'GHANA' },
    { code: 'GI', name: 'GIBRALTAR' },
    { code: 'GR', name: 'GREECE' },
    { code: 'GL', name: 'GREENLAND' },
    { code: 'GD', name: 'GRENADA' },
    { code: 'GP', name: 'GUADELOUPE' },
    { code: 'GU', name: 'GUAM' },
    { code: 'GT', name: 'GUATEMALA' },
    { code: 'GG', name: 'GUERNSEY' },
    { code: 'GN', name: 'GUINEA' },
    { code: 'GW', name: 'GUINEA-BISSAU' },
    { code: 'GY', name: 'GUYANA' },
    { code: 'HT', name: 'HAITI' },
    { code: 'HM', name: 'HEARD ISLAND AND MCDONALD ISLANDS' },
    { code: 'VA', name: 'HOLY SEE (VATICAN CITY STATE)' },
    { code: 'HN', name: 'HONDURAS' },
    { code: 'HK', name: 'HONG KONG' },
    { code: 'HU', name: 'HUNGARY' },
    { code: 'IS', name: 'ICELAND' },
    { code: 'IN', name: 'INDIA' },
    { code: 'ID', name: 'INDONESIA' },
    { code: 'IR', name: 'IRAN, ISLAMIC REPUBLIC OF' },
    { code: 'IQ', name: 'IRAQ' },
    { code: 'IE', name: 'IRELAND' },
    { code: 'IM', name: 'ISLE OF MAN' },
    { code: 'IL', name: 'ISRAEL' },
    { code: 'IT', name: 'ITALY' },
    { code: 'JM', name: 'JAMAICA' },
    { code: 'JP', name: 'JAPAN' },
    { code: 'JE', name: 'JERSEY' },
    { code: 'JO', name: 'JORDAN' },
    { code: 'KZ', name: 'KAZAKHSTAN' },
    { code: 'KE', name: 'KENYA' },
    { code: 'KI', name: 'KIRIBATI' },
    { code: 'KP', name: 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF' },
    { code: 'KR', name: 'KOREA, REPUBLIC OF' },
    { code: 'KW', name: 'KUWAIT' },
    { code: 'KG', name: 'KYRGYZSTAN' },
    { code: 'LA', name: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC' },
    { code: 'LV', name: 'LATVIA' },
    { code: 'LB', name: 'LEBANON' },
    { code: 'LS', name: 'LESOTHO' },
    { code: 'LR', name: 'LIBERIA' },
    { code: 'LY', name: 'LIBYA' },
    { code: 'LI', name: 'LIECHTENSTEIN' },
    { code: 'LT', name: 'LITHUANIA' },
    { code: 'LU', name: 'LUXEMBOURG' },
    { code: 'MO', name: 'MACAO' },
    { code: 'MK', name: 'NORTH MACEDONIA' },
    { code: 'MG', name: 'MADAGASCAR' },
    { code: 'MW', name: 'MALAWI' },
    { code: 'MY', name: 'MALAYSIA' },
    { code: 'MV', name: 'MALDIVES' },
    { code: 'ML', name: 'MALI' },
    { code: 'MT', name: 'MALTA' },
    { code: 'MH', name: 'MARSHALL ISLANDS' },
    { code: 'MQ', name: 'MARTINIQUE' },
    { code: 'MR', name: 'MAURITANIA' },
    { code: 'MU', name: 'MAURITIUS' },
    { code: 'YT', name: 'MAYOTTE' },
    { code: 'MX', name: 'MEXICO' },
    { code: 'FM', name: 'MICRONESIA, FEDERATED STATES OF' },
    { code: 'MD', name: 'MOLDOVA, REPUBLIC OF' },
    { code: 'MC', name: 'MONACO' },
    { code: 'MN', name: 'MONGOLIA' },
    { code: 'ME', name: 'MONTENEGRO' },
    { code: 'MS', name: 'MONTSERRAT' },
    { code: 'MA', name: 'MOROCCO' },
    { code: 'MZ', name: 'MOZAMBIQUE' },
    { code: 'MM', name: 'MYANMAR' },
    { code: 'NA', name: 'NAMIBIA' },
    { code: 'NR', name: 'NAURU' },
    { code: 'NP', name: 'NEPAL' },
    { code: 'NL', name: 'NETHERLANDS' },
    { code: 'NC', name: 'NEW CALEDONIA' },
    { code: 'NZ', name: 'NEW ZEALAND' },
    { code: 'NI', name: 'NICARAGUA' },
    { code: 'NE', name: 'NIGER' },
    { code: 'NG', name: 'NIGERIA' },
    { code: 'NU', name: 'NIUE' },
    { code: 'NF', name: 'NORFOLK ISLAND' },
    { code: 'MP', name: 'NORTHERN MARIANA ISLANDS' },
    { code: 'NO', name: 'NORWAY' },
    { code: 'OM', name: 'OMAN' },
    { code: 'PK', name: 'PAKISTAN' },
    { code: 'PW', name: 'PALAU' },
    { code: 'PS', name: 'PALESTINE, STATE OF' },
    { code: 'PA', name: 'PANAMA' },
    { code: 'PG', name: 'PAPUA NEW GUINEA' },
    { code: 'PY', name: 'PARAGUAY' },
    { code: 'PE', name: 'PERU' },
    { code: 'PH', name: 'PHILIPPINES' },
    { code: 'PN', name: 'PITCAIRN' },
    { code: 'PL', name: 'POLAND' },
    { code: 'PT', name: 'PORTUGAL' },
    { code: 'PR', name: 'PUERTO RICO' },
    { code: 'QA', name: 'QATAR' },
    { code: 'RE', name: 'REUNION' },
    { code: 'RO', name: 'ROMANIA' },
    { code: 'RU', name: 'RUSSIAN FEDERATION' },
    { code: 'RW', name: 'RWANDA' },
    { code: 'BL', name: 'SAINT BARTHELEMY' },
    { code: 'SH', name: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA' },
    { code: 'KN', name: 'SAINT KITTS AND NEVIS' },
    { code: 'LC', name: 'SAINT LUCIA' },
    { code: 'MF', name: 'SAINT MARTIN (FRENCH PART)' },
    { code: 'PM', name: 'SAINT PIERRE AND MIQUELON' },
    { code: 'VC', name: 'SAINT VINCENT AND THE GRENADINES' },
    { code: 'WS', name: 'SAMOA' },
    { code: 'SM', name: 'SAN MARINO' },
    { code: 'ST', name: 'SAO TOME AND PRINCIPE' },
    { code: 'SA', name: 'SAUDI ARABIA' },
    { code: 'SN', name: 'SENEGAL' },
    { code: 'RS', name: 'SERBIA' },
    { code: 'SC', name: 'SEYCHELLES' },
    { code: 'SL', name: 'SIERRA LEONE' },
    { code: 'SG', name: 'SINGAPORE' },
    { code: 'SX', name: 'SINT MAARTEN (DUTCH PART)' },
    { code: 'SK', name: 'SLOVAKIA' },
    { code: 'SI', name: 'SLOVENIA' },
    { code: 'SB', name: 'SOLOMON ISLANDS' },
    { code: 'SO', name: 'SOMALIA' },
    { code: 'ZA', name: 'SOUTH AFRICA' },
    { code: 'GS', name: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS' },
    { code: 'SS', name: 'SOUTH SUDAN' },
    { code: 'ES', name: 'SPAIN' },
    { code: 'LK', name: 'SRI LANKA' },
    { code: 'SD', name: 'SUDAN' },
    { code: 'SR', name: 'SURINAME' },
    { code: 'SJ', name: 'SVALBARD AND JAN MAYEN' },
    { code: 'SZ', name: 'ESWATINI' },
    { code: 'SE', name: 'SWEDEN' },
    { code: 'CH', name: 'SWITZERLAND' },
    { code: 'SY', name: 'SYRIAN ARAB REPUBLIC' },
    { code: 'TW', name: 'TAIWAN, PROVINCE OF CHINA' },
    { code: 'TJ', name: 'TAJIKISTAN' },
    { code: 'TZ', name: 'TANZANIA, UNITED REPUBLIC OF' },
    { code: 'TH', name: 'THAILAND' },
    { code: 'TL', name: 'TIMOR-LESTE' },
    { code: 'TG', name: 'TOGO' },
    { code: 'TK', name: 'TOKELAU' },
    { code: 'TO', name: 'TONGA' },
    { code: 'TT', name: 'TRINIDAD AND TOBAGO' },
    { code: 'TN', name: 'TUNISIA' },
    { code: 'TR', name: 'TURKEY' },
    { code: 'TM', name: 'TURKMENISTAN' },
    { code: 'TC', name: 'TURKS AND CAICOS ISLANDS' },
    { code: 'TV', name: 'TUVALU' },
    { code: 'UG', name: 'UGANDA' },
    { code: 'UA', name: 'UKRAINE' },
    { code: 'AE', name: 'UNITED ARAB EMIRATES' },
    { code: 'GB', name: 'UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND' },
    { code: 'US', name: 'UNITED STATES' },
    { code: 'UM', name: 'UNITED STATES MINOR OUTLYING ISLANDS' },
    { code: 'UY', name: 'URUGUAY' },
    { code: 'UZ', name: 'UZBEKISTAN' },
    { code: 'VU', name: 'VANUATU' },
    { code: 'VE', name: 'VENEZUELA, BOLIVARIAN REPUBLIC OF' },
    { code: 'VN', name: 'VIET NAM' },
    { code: 'VG', name: 'VIRGIN ISLANDS, BRITISH' },
    { code: 'VI', name: 'VIRGIN ISLANDS, U.S.' },
    { code: 'WF', name: 'WALLIS AND FUTUNA' },
    { code: 'EH', name: 'WESTERN SAHARA' },
    { code: 'YE', name: 'YEMEN' },
    { code: 'ZM', name: 'ZAMBIA' },
    { code: 'ZW', name: 'ZIMBABWE' },
    { code: 'XK', name: 'KOSOVO' },
    { code: 'X5', name: 'STATELESS' },
    { code: 'XX', name: 'OTHER COUNTRY' }
  ];
 
  natureOptions = [
    { value: '01', viewValue: 'Investissements de recherche et de développement' },
    { value: '02', viewValue: 'Concessions de marques' },
    { value: '03', viewValue: 'Marques de fabrique' },
    { value: '04', viewValue: 'Brevets' },
    { value: '05', viewValue: 'Licences marques' },
    { value: '06', viewValue: 'Licences et droits limités' },
    { value: '07', viewValue: 'Noms commerciaux' },
    { value: '08', viewValue: 'Procédés et valeurs similaires' },
    { value: '09', viewValue: 'Logiciels' },
    { value: '10', viewValue: 'Droit au bail' },
    { value: 'AutreNatureActifIncorporel', viewValue: 'Autre Nature Actif Incorporel' }
  ];

  selectedNature: string;
   isAutreSelected: boolean;
  onNatureChange(event: any) {
    this.selectedNature = event.value;
    this.isAutreSelected = this.selectedNature === 'AutreNatureActifIncorporel';
  }
  

 
  

 
 
  constructor(  private formBuilder: FormBuilder,
    private InfoGEService: ServiceService,
    private ActifIncorporelService: ServiceService,
    private ActifCorporelService: ServiceService,
    private RestructurationGEService: ServiceService,
    private shared: SharedServiveService,
    
  ) { }

  ngOnInit(): void {

    this.stepThreeForm = this.formBuilder.group({
      identifiantEntreprise: [''],
      RaisonSociale: [''],
      AdresseSiegeSocial: [''],
      descriptionPrincipalesActivites: [''],
      DescriptionPolitique: [''],
      MatriculeFiscal: [''],
      Identifiant: [''],
      EtatTerritoire: [''],
    

     

    });

    this.step4Form = this.formBuilder.group({

      RaisonSociale: [''],
      onereuxGratuit: [''],
      NatureActifIncorporel: [''],
      qualiteEntreprise: [''],
      MatriculeFiscal: [''],
      Identifiant: [''],
      EtatTerritoire: [''],
      NatureRelation: [''],

    });

    this.step5Form = this.formBuilder.group({

      RaisonSociale: [''],
      NatureActifCorporel: [''],
      qualiteEntreprise: [''],
      MatriculeFiscal: [''],
      Identifiant: [''],
      EtatTerritoire: [''],
      NatureRelation: [''],

    });

    this.step6Form = this.formBuilder.group({
      affirmation: [this.textAreaValue],
      descripton: [''],
      

    });

  }
 
  stepThreeForm: FormGroup = new FormGroup({

    RaisonSociale: new FormControl(''),
    AdresseSiegeSocial: new FormControl(''),
    descriptionPrincipalesActivites: new FormControl(''),
    DescriptionPolitique: new FormControl(''),
    Identifiant: new FormControl(''),
    EtatTerritoire: new FormControl(''),
    NatureRelation: new FormControl(''),
    


  });


  step4Form: FormGroup = new FormGroup({

    RaisonSociale: new FormControl(''),
    onereuxGratuit: new FormControl(''),
    NatureActifIncorporel: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    MatriculeFiscal: new FormControl(''),
    Identifiant: new FormControl(''),
    EtatTerritoire: new FormControl(''),
    NatureRelation: new FormControl(''),


  });


  step5Form: FormGroup = new FormGroup({

    RaisonSociale: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    MatriculeFiscal: new FormControl(''),
    Identifiant: new FormControl(''),
    EtatTerritoire: new FormControl(''),
    NatureActifCorporel: new FormControl(''),
    NatureRelation: new FormControl(''),


  });

  step6Form: FormGroup = new FormGroup({
    affirmation: new FormControl(''),
    description: new FormControl(''),
 });

  restructurationsForm: FormGroup;
  get f(): { [key: string]: AbstractControl } {
    return this.stepThreeForm.controls;
  }






  selectedQualite: string;
  
  qualiteOptions = [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChange(event: any) {
    this.selectedQualite = event.value;
  }












  selectedQualiteAI: string;
  
  qualiteOptionsAI = [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangeAI(event: any) {
    this.selectedQualiteAI = event.value;
  }





  selectedNatureNR: string;
  isAutreSelectedNR: boolean;
  natureOptionsNR = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];
  onNatureChangeNR(event: any) {
    this.selectedNatureNR = event.value;
    this.isAutreSelectedNR = this.selectedNatureNR === 'AutreNatureRelation';
  }

 
  

  currentForm = 1;



  goToNextForm() {
    this.currentForm++;
    this.stepThreeSubmit()

  }







  selectedOption: string = 'MatriculeFiscal'; // Default to 'MatriculeFiscal'
  
onOptionChange(event: any) {
    this.selectedOption= event.value;
  }


  
  selectedOptionAI: string = 'MatriculeFiscal'; // Default to 'MatriculeFiscal'
  
onOptionChangeAI(event: any) {
    this.selectedOptionAI= event.value;
  }





  countries2= [
    { code: 'AF', name: 'AFGHANISTAN' },
    { code: 'AX', name: 'ALAND ISLANDS' },
    { code: 'AL', name: 'ALBANIA' },
    { code: 'DZ', name: 'ALGERIA' },
    { code: 'AS', name: 'AMERICAN SAMOA' },
    { code: 'AD', name: 'ANDORRA' },
    { code: 'AO', name: 'ANGOLA' },
    { code: 'AI', name: 'ANGUILLA' },
    { code: 'AQ', name: 'ANTARCTICA' },
    { code: 'AG', name: 'ANTIGUA AND BARBUDA' },
    { code: 'AR', name: 'ARGENTINA' },
    { code: 'AM', name: 'ARMENIA' },
    { code: 'AW', name: 'ARUBA' },
    { code: 'AU', name: 'AUSTRALIA' },
    { code: 'AT', name: 'AUSTRIA' },
    { code: 'AZ', name: 'AZERBAIJAN' },
    { code: 'BS', name: 'BAHAMAS' },
    { code: 'BH', name: 'BAHRAIN' },
    { code: 'BD', name: 'BANGLADESH' },
    { code: 'BB', name: 'BARBADOS' },
    { code: 'BY', name: 'BELARUS' },
    { code: 'BE', name: 'BELGIUM' },
    { code: 'BZ', name: 'BELIZE' },
    { code: 'BJ', name: 'BENIN' },
    { code: 'BM', name: 'BERMUDA' },
    { code: 'BT', name: 'BHUTAN' },
    { code: 'BO', name: 'BOLIVIA, PLURINATIONAL STATE OF' },
    { code: 'BQ', name: 'BONAIRE, SINT EUSTATIUS AND SABA' },
    { code: 'BA', name: 'BOSNIA AND HERZEGOVINA' },
    { code: 'BW', name: 'BOTSWANA' },
    { code: 'BV', name: 'BOUVET ISLAND' },
    { code: 'BR', name: 'BRAZIL' },
    { code: 'IO', name: 'BRITISH INDIAN OCEAN TERRITORY' },
    { code: 'BN', name: 'BRUNEI DARUSSALAM' },
    { code: 'BG', name: 'BULGARIA' },
    { code: 'BF', name: 'BURKINA FASO' },
    { code: 'BI', name: 'BURUNDI' },
    { code: 'KH', name: 'CAMBODIA' },
    { code: 'CM', name: 'CAMEROON' },
    { code: 'CA', name: 'CANADA' },
    { code: 'CV', name: 'CABO VERDE' },
    { code: 'KY', name: 'CAYMAN ISLANDS' },
    { code: 'CF', name: 'CENTRAL AFRICAN REPUBLIC' },
    { code: 'TD', name: 'CHAD' },
    { code: 'CL', name: 'CHILE' },
    { code: 'CN', name: 'CHINA' },
    { code: 'CX', name: 'CHRISTMAS ISLAND' },
    { code: 'CC', name: 'COCOS (KEELING) ISLANDS' },
    { code: 'CO', name: 'COLOMBIA' },
    { code: 'KM', name: 'COMOROS' },
    { code: 'CG', name: 'CONGO' },
    { code: 'CD', name: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE' },
    { code: 'CK', name: 'COOK ISLANDS' },
    { code: 'CR', name: 'COSTA RICA' },
    { code: 'CI', name: 'COTE D\'IVOIRE' },
    { code: 'HR', name: 'CROATIA' },
    { code: 'CU', name: 'CUBA' },
    { code: 'CW', name: 'CURACAO' },
    { code: 'CY', name: 'CYPRUS' },
    { code: 'CZ', name: 'CZECHIA' },
    { code: 'DK', name: 'DENMARK' },
    { code: 'DJ', name: 'DJIBOUTI' },
    { code: 'DM', name: 'DOMINICA' },
    { code: 'DO', name: 'DOMINICAN REPUBLIC' },
    { code: 'EC', name: 'ECUADOR' },
    { code: 'EG', name: 'EGYPT' },
    { code: 'SV', name: 'EL SALVADOR' },
    { code: 'GQ', name: 'EQUATORIAL GUINEA' },
    { code: 'ER', name: 'ERITREA' },
    { code: 'EE', name: 'ESTONIA' },
    { code: 'ET', name: 'ETHIOPIA' },
    { code: 'FK', name: 'FALKLAND ISLANDS (MALVINAS)' },
    { code: 'FO', name: 'FAROE ISLANDS' },
    { code: 'FJ', name: 'FIJI' },
    { code: 'FI', name: 'FINLAND' },
    { code: 'FR', name: 'FRANCE' },
    { code: 'GF', name: 'FRENCH GUIANA' },
    { code: 'PF', name: 'FRENCH POLYNESIA' },
    { code: 'TF', name: 'FRENCH SOUTHERN TERRITORIES' },
    { code: 'GA', name: 'GABON' },
    { code: 'GM', name: 'GAMBIA' },
    { code: 'GE', name: 'GEORGIA' },
    { code: 'DE', name: 'GERMANY' },
    { code: 'GH', name: 'GHANA' },
    { code: 'GI', name: 'GIBRALTAR' },
    { code: 'GR', name: 'GREECE' },
    { code: 'GL', name: 'GREENLAND' },
    { code: 'GD', name: 'GRENADA' },
    { code: 'GP', name: 'GUADELOUPE' },
    { code: 'GU', name: 'GUAM' },
    { code: 'GT', name: 'GUATEMALA' },
    { code: 'GG', name: 'GUERNSEY' },
    { code: 'GN', name: 'GUINEA' },
    { code: 'GW', name: 'GUINEA-BISSAU' },
    { code: 'GY', name: 'GUYANA' },
    { code: 'HT', name: 'HAITI' },
    { code: 'HM', name: 'HEARD ISLAND AND MCDONALD ISLANDS' },
    { code: 'VA', name: 'HOLY SEE (VATICAN CITY STATE)' },
    { code: 'HN', name: 'HONDURAS' },
    { code: 'HK', name: 'HONG KONG' },
    { code: 'HU', name: 'HUNGARY' },
    { code: 'IS', name: 'ICELAND' },
    { code: 'IN', name: 'INDIA' },
    { code: 'ID', name: 'INDONESIA' },
    { code: 'IR', name: 'IRAN, ISLAMIC REPUBLIC OF' },
    { code: 'IQ', name: 'IRAQ' },
    { code: 'IE', name: 'IRELAND' },
    { code: 'IM', name: 'ISLE OF MAN' },
    { code: 'IL', name: 'ISRAEL' },
    { code: 'IT', name: 'ITALY' },
    { code: 'JM', name: 'JAMAICA' },
    { code: 'JP', name: 'JAPAN' },
    { code: 'JE', name: 'JERSEY' },
    { code: 'JO', name: 'JORDAN' },
    { code: 'KZ', name: 'KAZAKHSTAN' },
    { code: 'KE', name: 'KENYA' },
    { code: 'KI', name: 'KIRIBATI' },
    { code: 'KP', name: 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF' },
    { code: 'KR', name: 'KOREA, REPUBLIC OF' },
    { code: 'KW', name: 'KUWAIT' },
    { code: 'KG', name: 'KYRGYZSTAN' },
    { code: 'LA', name: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC' },
    { code: 'LV', name: 'LATVIA' },
    { code: 'LB', name: 'LEBANON' },
    { code: 'LS', name: 'LESOTHO' },
    { code: 'LR', name: 'LIBERIA' },
    { code: 'LY', name: 'LIBYA' },
    { code: 'LI', name: 'LIECHTENSTEIN' },
    { code: 'LT', name: 'LITHUANIA' },
    { code: 'LU', name: 'LUXEMBOURG' },
    { code: 'MO', name: 'MACAO' },
    { code: 'MK', name: 'NORTH MACEDONIA' },
    { code: 'MG', name: 'MADAGASCAR' },
    { code: 'MW', name: 'MALAWI' },
    { code: 'MY', name: 'MALAYSIA' },
    { code: 'MV', name: 'MALDIVES' },
    { code: 'ML', name: 'MALI' },
    { code: 'MT', name: 'MALTA' },
    { code: 'MH', name: 'MARSHALL ISLANDS' },
    { code: 'MQ', name: 'MARTINIQUE' },
    { code: 'MR', name: 'MAURITANIA' },
    { code: 'MU', name: 'MAURITIUS' },
    { code: 'YT', name: 'MAYOTTE' },
    { code: 'MX', name: 'MEXICO' },
    { code: 'FM', name: 'MICRONESIA, FEDERATED STATES OF' },
    { code: 'MD', name: 'MOLDOVA, REPUBLIC OF' },
    { code: 'MC', name: 'MONACO' },
    { code: 'MN', name: 'MONGOLIA' },
    { code: 'ME', name: 'MONTENEGRO' },
    { code: 'MS', name: 'MONTSERRAT' },
    { code: 'MA', name: 'MOROCCO' },
    { code: 'MZ', name: 'MOZAMBIQUE' },
    { code: 'MM', name: 'MYANMAR' },
    { code: 'NA', name: 'NAMIBIA' },
    { code: 'NR', name: 'NAURU' },
    { code: 'NP', name: 'NEPAL' },
    { code: 'NL', name: 'NETHERLANDS' },
    { code: 'NC', name: 'NEW CALEDONIA' },
    { code: 'NZ', name: 'NEW ZEALAND' },
    { code: 'NI', name: 'NICARAGUA' },
    { code: 'NE', name: 'NIGER' },
    { code: 'NG', name: 'NIGERIA' },
    { code: 'NU', name: 'NIUE' },
    { code: 'NF', name: 'NORFOLK ISLAND' },
    { code: 'MP', name: 'NORTHERN MARIANA ISLANDS' },
    { code: 'NO', name: 'NORWAY' },
    { code: 'OM', name: 'OMAN' },
    { code: 'PK', name: 'PAKISTAN' },
    { code: 'PW', name: 'PALAU' },
    { code: 'PS', name: 'PALESTINE, STATE OF' },
    { code: 'PA', name: 'PANAMA' },
    { code: 'PG', name: 'PAPUA NEW GUINEA' },
    { code: 'PY', name: 'PARAGUAY' },
    { code: 'PE', name: 'PERU' },
    { code: 'PH', name: 'PHILIPPINES' },
    { code: 'PN', name: 'PITCAIRN' },
    { code: 'PL', name: 'POLAND' },
    { code: 'PT', name: 'PORTUGAL' },
    { code: 'PR', name: 'PUERTO RICO' },
    { code: 'QA', name: 'QATAR' },
    { code: 'RE', name: 'REUNION' },
    { code: 'RO', name: 'ROMANIA' },
    { code: 'RU', name: 'RUSSIAN FEDERATION' },
    { code: 'RW', name: 'RWANDA' },
    { code: 'BL', name: 'SAINT BARTHELEMY' },
    { code: 'SH', name: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA' },
    { code: 'KN', name: 'SAINT KITTS AND NEVIS' },
    { code: 'LC', name: 'SAINT LUCIA' },
    { code: 'MF', name: 'SAINT MARTIN (FRENCH PART)' },
    { code: 'PM', name: 'SAINT PIERRE AND MIQUELON' },
    { code: 'VC', name: 'SAINT VINCENT AND THE GRENADINES' },
    { code: 'WS', name: 'SAMOA' },
    { code: 'SM', name: 'SAN MARINO' },
    { code: 'ST', name: 'SAO TOME AND PRINCIPE' },
    { code: 'SA', name: 'SAUDI ARABIA' },
    { code: 'SN', name: 'SENEGAL' },
    { code: 'RS', name: 'SERBIA' },
    { code: 'SC', name: 'SEYCHELLES' },
    { code: 'SL', name: 'SIERRA LEONE' },
    { code: 'SG', name: 'SINGAPORE' },
    { code: 'SX', name: 'SINT MAARTEN (DUTCH PART)' },
    { code: 'SK', name: 'SLOVAKIA' },
    { code: 'SI', name: 'SLOVENIA' },
    { code: 'SB', name: 'SOLOMON ISLANDS' },
    { code: 'SO', name: 'SOMALIA' },
    { code: 'ZA', name: 'SOUTH AFRICA' },
    { code: 'GS', name: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS' },
    { code: 'SS', name: 'SOUTH SUDAN' },
    { code: 'ES', name: 'SPAIN' },
    { code: 'LK', name: 'SRI LANKA' },
    { code: 'SD', name: 'SUDAN' },
    { code: 'SR', name: 'SURINAME' },
    { code: 'SJ', name: 'SVALBARD AND JAN MAYEN' },
    { code: 'SZ', name: 'ESWATINI' },
    { code: 'SE', name: 'SWEDEN' },
    { code: 'CH', name: 'SWITZERLAND' },
    { code: 'SY', name: 'SYRIAN ARAB REPUBLIC' },
    { code: 'TW', name: 'TAIWAN, PROVINCE OF CHINA' },
    { code: 'TJ', name: 'TAJIKISTAN' },
    { code: 'TZ', name: 'TANZANIA, UNITED REPUBLIC OF' },
    { code: 'TH', name: 'THAILAND' },
    { code: 'TL', name: 'TIMOR-LESTE' },
    { code: 'TG', name: 'TOGO' },
    { code: 'TK', name: 'TOKELAU' },
    { code: 'TO', name: 'TONGA' },
    { code: 'TT', name: 'TRINIDAD AND TOBAGO' },
    { code: 'TN', name: 'TUNISIA' },
    { code: 'TR', name: 'TURKEY' },
    { code: 'TM', name: 'TURKMENISTAN' },
    { code: 'TC', name: 'TURKS AND CAICOS ISLANDS' },
    { code: 'TV', name: 'TUVALU' },
    { code: 'UG', name: 'UGANDA' },
    { code: 'UA', name: 'UKRAINE' },
    { code: 'AE', name: 'UNITED ARAB EMIRATES' },
    { code: 'GB', name: 'UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND' },
    { code: 'US', name: 'UNITED STATES' },
    { code: 'UM', name: 'UNITED STATES MINOR OUTLYING ISLANDS' },
    { code: 'UY', name: 'URUGUAY' },
    { code: 'UZ', name: 'UZBEKISTAN' },
    { code: 'VU', name: 'VANUATU' },
    { code: 'VE', name: 'VENEZUELA, BOLIVARIAN REPUBLIC OF' },
    { code: 'VN', name: 'VIET NAM' },
    { code: 'VG', name: 'VIRGIN ISLANDS, BRITISH' },
    { code: 'VI', name: 'VIRGIN ISLANDS, U.S.' },
    { code: 'WF', name: 'WALLIS AND FUTUNA' },
    { code: 'EH', name: 'WESTERN SAHARA' },
    { code: 'YE', name: 'YEMEN' },
    { code: 'ZM', name: 'ZAMBIA' },
    { code: 'ZW', name: 'ZIMBABWE' },
    { code: 'XK', name: 'KOSOVO' },
    { code: 'X5', name: 'STATELESS' },
    { code: 'XX', name: 'OTHER COUNTRY' }
  ];
 


  qualiteEntrepriseAI: QualiteEntreprise = {
    key1: null,
    key2: null,
    key3: null,
    key4: null,
    key5: null,
    key6: {
      key: null,
      value: ''
    },
  };

  showInput: boolean = false;
  onCheckboxChange(event: any) {
    this.qualiteEntrepriseAI.key1 = (event.source.checked && event.source.value === '1') ? event.source.value : (!event.source.checked && event.source.value === '1' ? null : this.qualiteEntrepriseAI.key1);
    this.qualiteEntrepriseAI.key2 = (event.source.checked && event.source.value === '2') ? event.source.value : (!event.source.checked && event.source.value === '2' ? null : this.qualiteEntrepriseAI.key2);
    this.qualiteEntrepriseAI.key3 = (event.source.checked && event.source.value === '3') ? event.source.value : (!event.source.checked && event.source.value === '3' ? null : this.qualiteEntrepriseAI.key3);
    this.qualiteEntrepriseAI.key4 = (event.source.checked && event.source.value === '4') ? event.source.value : (!event.source.checked && event.source.value === '4' ? null : this.qualiteEntrepriseAI.key4);
    this.qualiteEntrepriseAI.key5 = (event.source.checked && event.source.value === '5') ? event.source.value : (!event.source.checked && event.source.value === '5' ? null : this.qualiteEntrepriseAI.key5);
    this.qualiteEntrepriseAI.key6.key = (event.source.checked && event.source.value === '6') ? event.source.value : (!event.source.checked && event.source.value === '6' ? null : this.qualiteEntrepriseAI.key6.key);

    if (event.source.value === '6') {
      this.showInput = event.checked;
    }
  }
  
  declarationId: number; 
  submitted = false;
  identifiantEntreprise : any
  stepThreeSubmit(): void {
    const idDeclaration = this.shared.getData(); 
    console.log(idDeclaration)
    this.submitted = true;
    console.log(this.stepThreeForm);
    
    
    if (this.stepThreeForm.invalid) {
     
      Object.keys(this.stepThreeForm.controls).forEach(key => {
        this.stepThreeForm.get(key).markAsTouched();
      });
      console.log("Form is invalid");
      return;
    }
  
     
    switch (this.selectedOption) {
      case "MatriculeFiscal":
        this.identifiantEntreprise = { MatriculeFiscal: this.stepThreeForm.get('MatriculeFiscal')?.value };
        break;
      case "Identifiant":
        this.identifiantEntreprise = { Identifiant: this.stepThreeForm.get('Identifiant')?.value };
        break;
      case "EtatTerritoire":
        this.identifiantEntreprise = { EtatTerritoire: this.stepThreeForm.get('EtatTerritoire')?.value };
        break;
      default:
        console.error("No valid option selected");
        return;
    }
  
    console.log("Identifiant Entreprise:", this.identifiantEntreprise);
    console.log("test1" +idDeclaration)

    const newInfoGE: InfoGE = {
      identifiantEntreprise: JSON.stringify(this.identifiantEntreprise),
      raisonSociale: this.stepThreeForm.get('RaisonSociale')?.value,
      adresseSiegeSocial: this.stepThreeForm.get('AdresseSiegeSocial')?.value,
      descriptionPrincipalesActivites: this.stepThreeForm.get('descriptionPrincipalesActivites')?.value,
      descriptionGeneralePolitiquePrixTransfert: this.stepThreeForm.get('DescriptionPolitique')?.value,
    };
    console.log(newInfoGE);
    console.log("test2" +idDeclaration)

    // Call the service to create new InfoGE
    this.InfoGEService.createInfoGE(newInfoGE, idDeclaration).subscribe(
      data => {
        console.log('Info groupe entreprise created:', data);
        this.shared.setinfoGEdata(data.id);
        console.log('Declaration ID:', idDeclaration);
        console.log('newInfoGE data:', data);
      },
      error => {
        console.error('Error creating Info groupe entreprise:', error);
      }
    );
  }
  
  identifiantEntrepriseAI : any
  jsonObject:any
  submitted4 = false;
  step4Submit() {
    const idInfoGE = this.shared.getinfoGEdata(); 
    this.submitted4 = true;
  
    if (this.selectedQualite === "AutreQualite"){
      

      
      this.jsonObject = {
        AutreQualite: this.step4Form.get('AutreQualite').value
    }}
    if(this.selectedOptionAI === "MatriculeFiscal"){
      this.identifiantEntrepriseAI = {
       MatriculeFiscal : this.step4Form.get('MatriculeFiscal')?.value
     }
   }else if(this.selectedOptionAI === "Identifiant"){
     this.identifiantEntrepriseAI = {
       Identifiant : this.step4Form.get('Identifiant')?.value
     }
   }else if(this.selectedOptionAI === "EtatTerritoire"){
     this.identifiantEntrepriseAI = {
       EtatTerritoire : this.step4Form.get('EtatTerritoire')?.value
     }
   }

   console.log(this.identifiantEntrepriseAI); 
const newActifIncorporel: ActifIncorporel = {
  identifiantEntreprise: JSON.stringify(this.identifiantEntrepriseAI),
  nature_ActifIncorporel: this.step4Form.get('NatureActifIncorporel')?.value,
  qualiteEntreprise: (this.step4Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step4Form.get('qualiteEntreprise')?.value,
  raisonSociale: this.step4Form.get('RaisonSociale')?.value,
  onereuxGratuit: this.step4Form.get('onereuxGratuit')?.value,
  natureRelationEntreprise: this.step4Form.get('NatureRelation')?.value,
};

this.ActifIncorporelService.createActifIncorporel(newActifIncorporel, idInfoGE).subscribe(
  data => {
    console.log('Actif Incorporel created:', data);
    this.resetForm();
  },
  error => {
    console.error('Error creating Actif Incorporel:', error);
  }
);

  }
  
  resetForm() {
    this.submitted4 = false;
    this.step4Form.reset();
  }
  
  
  

  identifiantEntrepriseAC : any
  submitted5 = false;
  step5Submit() {
    const idInfoGE = this.shared.getinfoGEdata(); 
    this.submitted5 = true;
  
    if (this.step5Form.invalid) {
      Object.keys(this.step5Form.controls).forEach(key => {
        this.step5Form.get(key).markAsTouched();
      });
      return;
    }
  
    let identifiantEntrepriseACValue: any;
    switch (this.selectedOptionAC) {
      case "MatriculeFiscal":
        identifiantEntrepriseACValue = { MatriculeFiscal: this.step5Form.get('MatriculeFiscal')?.value };
        break;
      case "Identifiant":
        identifiantEntrepriseACValue = { Identifiant: this.step5Form.get('Identifiant')?.value };
        break;
      case "EtatTerritoire":
        identifiantEntrepriseACValue = { EtatTerritoire: this.step5Form.get('EtatTerritoire')?.value };
        break;
    }
  
    // Adjust this based on actual object structure and requirement
    this.qualiteEntrepriseAC.key6.value = this.qualiteEntrepriseAC.key6.key === '6' ? this.step5Form.get('qualiteEntreprise').value : null;
  
    const newActifCorporel: ActifCorporel = {
      identifiantEntreprise: JSON.stringify(identifiantEntrepriseACValue),
      nature_ActifCorporel: this.step5Form.get('NatureActifCorporel').value,
      qualiteEntreprise: JSON.stringify(this.qualiteEntrepriseAC),
      raisonSociale: this.step5Form.get('RaisonSociale').value,
      natureRelationEntreprise: this.step5Form.get('NatureRelation').value,
    };
  
    this.ActifCorporelService.createActifCorporel(newActifCorporel, idInfoGE).subscribe(
      data => {
        console.log('Actif corporel created:', data);
        this.resetForm5();
      },
      error => {
        console.error('Error creating Actif corporel:', error);
        // Display an error message to the user
      }
    );
  }
  
  resetForm5() {
    this.submitted5 = false;
    this.step5Form.reset();
  }
  
  
  












 



  countries3= [
    { code: 'AF', name: 'AFGHANISTAN' },
    { code: 'AX', name: 'ALAND ISLANDS' },
    { code: 'AL', name: 'ALBANIA' },
    { code: 'DZ', name: 'ALGERIA' },
    { code: 'AS', name: 'AMERICAN SAMOA' },
    { code: 'AD', name: 'ANDORRA' },
    { code: 'AO', name: 'ANGOLA' },
    { code: 'AI', name: 'ANGUILLA' },
    { code: 'AQ', name: 'ANTARCTICA' },
    { code: 'AG', name: 'ANTIGUA AND BARBUDA' },
    { code: 'AR', name: 'ARGENTINA' },
    { code: 'AM', name: 'ARMENIA' },
    { code: 'AW', name: 'ARUBA' },
    { code: 'AU', name: 'AUSTRALIA' },
    { code: 'AT', name: 'AUSTRIA' },
    { code: 'AZ', name: 'AZERBAIJAN' },
    { code: 'BS', name: 'BAHAMAS' },
    { code: 'BH', name: 'BAHRAIN' },
    { code: 'BD', name: 'BANGLADESH' },
    { code: 'BB', name: 'BARBADOS' },
    { code: 'BY', name: 'BELARUS' },
    { code: 'BE', name: 'BELGIUM' },
    { code: 'BZ', name: 'BELIZE' },
    { code: 'BJ', name: 'BENIN' },
    { code: 'BM', name: 'BERMUDA' },
    { code: 'BT', name: 'BHUTAN' },
    { code: 'BO', name: 'BOLIVIA, PLURINATIONAL STATE OF' },
    { code: 'BQ', name: 'BONAIRE, SINT EUSTATIUS AND SABA' },
    { code: 'BA', name: 'BOSNIA AND HERZEGOVINA' },
    { code: 'BW', name: 'BOTSWANA' },
    { code: 'BV', name: 'BOUVET ISLAND' },
    { code: 'BR', name: 'BRAZIL' },
    { code: 'IO', name: 'BRITISH INDIAN OCEAN TERRITORY' },
    { code: 'BN', name: 'BRUNEI DARUSSALAM' },
    { code: 'BG', name: 'BULGARIA' },
    { code: 'BF', name: 'BURKINA FASO' },
    { code: 'BI', name: 'BURUNDI' },
    { code: 'KH', name: 'CAMBODIA' },
    { code: 'CM', name: 'CAMEROON' },
    { code: 'CA', name: 'CANADA' },
    { code: 'CV', name: 'CABO VERDE' },
    { code: 'KY', name: 'CAYMAN ISLANDS' },
    { code: 'CF', name: 'CENTRAL AFRICAN REPUBLIC' },
    { code: 'TD', name: 'CHAD' },
    { code: 'CL', name: 'CHILE' },
    { code: 'CN', name: 'CHINA' },
    { code: 'CX', name: 'CHRISTMAS ISLAND' },
    { code: 'CC', name: 'COCOS (KEELING) ISLANDS' },
    { code: 'CO', name: 'COLOMBIA' },
    { code: 'KM', name: 'COMOROS' },
    { code: 'CG', name: 'CONGO' },
    { code: 'CD', name: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE' },
    { code: 'CK', name: 'COOK ISLANDS' },
    { code: 'CR', name: 'COSTA RICA' },
    { code: 'CI', name: 'COTE D\'IVOIRE' },
    { code: 'HR', name: 'CROATIA' },
    { code: 'CU', name: 'CUBA' },
    { code: 'CW', name: 'CURACAO' },
    { code: 'CY', name: 'CYPRUS' },
    { code: 'CZ', name: 'CZECHIA' },
    { code: 'DK', name: 'DENMARK' },
    { code: 'DJ', name: 'DJIBOUTI' },
    { code: 'DM', name: 'DOMINICA' },
    { code: 'DO', name: 'DOMINICAN REPUBLIC' },
    { code: 'EC', name: 'ECUADOR' },
    { code: 'EG', name: 'EGYPT' },
    { code: 'SV', name: 'EL SALVADOR' },
    { code: 'GQ', name: 'EQUATORIAL GUINEA' },
    { code: 'ER', name: 'ERITREA' },
    { code: 'EE', name: 'ESTONIA' },
    { code: 'ET', name: 'ETHIOPIA' },
    { code: 'FK', name: 'FALKLAND ISLANDS (MALVINAS)' },
    { code: 'FO', name: 'FAROE ISLANDS' },
    { code: 'FJ', name: 'FIJI' },
    { code: 'FI', name: 'FINLAND' },
    { code: 'FR', name: 'FRANCE' },
    { code: 'GF', name: 'FRENCH GUIANA' },
    { code: 'PF', name: 'FRENCH POLYNESIA' },
    { code: 'TF', name: 'FRENCH SOUTHERN TERRITORIES' },
    { code: 'GA', name: 'GABON' },
    { code: 'GM', name: 'GAMBIA' },
    { code: 'GE', name: 'GEORGIA' },
    { code: 'DE', name: 'GERMANY' },
    { code: 'GH', name: 'GHANA' },
    { code: 'GI', name: 'GIBRALTAR' },
    { code: 'GR', name: 'GREECE' },
    { code: 'GL', name: 'GREENLAND' },
    { code: 'GD', name: 'GRENADA' },
    { code: 'GP', name: 'GUADELOUPE' },
    { code: 'GU', name: 'GUAM' },
    { code: 'GT', name: 'GUATEMALA' },
    { code: 'GG', name: 'GUERNSEY' },
    { code: 'GN', name: 'GUINEA' },
    { code: 'GW', name: 'GUINEA-BISSAU' },
    { code: 'GY', name: 'GUYANA' },
    { code: 'HT', name: 'HAITI' },
    { code: 'HM', name: 'HEARD ISLAND AND MCDONALD ISLANDS' },
    { code: 'VA', name: 'HOLY SEE (VATICAN CITY STATE)' },
    { code: 'HN', name: 'HONDURAS' },
    { code: 'HK', name: 'HONG KONG' },
    { code: 'HU', name: 'HUNGARY' },
    { code: 'IS', name: 'ICELAND' },
    { code: 'IN', name: 'INDIA' },
    { code: 'ID', name: 'INDONESIA' },
    { code: 'IR', name: 'IRAN, ISLAMIC REPUBLIC OF' },
    { code: 'IQ', name: 'IRAQ' },
    { code: 'IE', name: 'IRELAND' },
    { code: 'IM', name: 'ISLE OF MAN' },
    { code: 'IL', name: 'ISRAEL' },
    { code: 'IT', name: 'ITALY' },
    { code: 'JM', name: 'JAMAICA' },
    { code: 'JP', name: 'JAPAN' },
    { code: 'JE', name: 'JERSEY' },
    { code: 'JO', name: 'JORDAN' },
    { code: 'KZ', name: 'KAZAKHSTAN' },
    { code: 'KE', name: 'KENYA' },
    { code: 'KI', name: 'KIRIBATI' },
    { code: 'KP', name: 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF' },
    { code: 'KR', name: 'KOREA, REPUBLIC OF' },
    { code: 'KW', name: 'KUWAIT' },
    { code: 'KG', name: 'KYRGYZSTAN' },
    { code: 'LA', name: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC' },
    { code: 'LV', name: 'LATVIA' },
    { code: 'LB', name: 'LEBANON' },
    { code: 'LS', name: 'LESOTHO' },
    { code: 'LR', name: 'LIBERIA' },
    { code: 'LY', name: 'LIBYA' },
    { code: 'LI', name: 'LIECHTENSTEIN' },
    { code: 'LT', name: 'LITHUANIA' },
    { code: 'LU', name: 'LUXEMBOURG' },
    { code: 'MO', name: 'MACAO' },
    { code: 'MK', name: 'NORTH MACEDONIA' },
    { code: 'MG', name: 'MADAGASCAR' },
    { code: 'MW', name: 'MALAWI' },
    { code: 'MY', name: 'MALAYSIA' },
    { code: 'MV', name: 'MALDIVES' },
    { code: 'ML', name: 'MALI' },
    { code: 'MT', name: 'MALTA' },
    { code: 'MH', name: 'MARSHALL ISLANDS' },
    { code: 'MQ', name: 'MARTINIQUE' },
    { code: 'MR', name: 'MAURITANIA' },
    { code: 'MU', name: 'MAURITIUS' },
    { code: 'YT', name: 'MAYOTTE' },
    { code: 'MX', name: 'MEXICO' },
    { code: 'FM', name: 'MICRONESIA, FEDERATED STATES OF' },
    { code: 'MD', name: 'MOLDOVA, REPUBLIC OF' },
    { code: 'MC', name: 'MONACO' },
    { code: 'MN', name: 'MONGOLIA' },
    { code: 'ME', name: 'MONTENEGRO' },
    { code: 'MS', name: 'MONTSERRAT' },
    { code: 'MA', name: 'MOROCCO' },
    { code: 'MZ', name: 'MOZAMBIQUE' },
    { code: 'MM', name: 'MYANMAR' },
    { code: 'NA', name: 'NAMIBIA' },
    { code: 'NR', name: 'NAURU' },
    { code: 'NP', name: 'NEPAL' },
    { code: 'NL', name: 'NETHERLANDS' },
    { code: 'NC', name: 'NEW CALEDONIA' },
    { code: 'NZ', name: 'NEW ZEALAND' },
    { code: 'NI', name: 'NICARAGUA' },
    { code: 'NE', name: 'NIGER' },
    { code: 'NG', name: 'NIGERIA' },
    { code: 'NU', name: 'NIUE' },
    { code: 'NF', name: 'NORFOLK ISLAND' },
    { code: 'MP', name: 'NORTHERN MARIANA ISLANDS' },
    { code: 'NO', name: 'NORWAY' },
    { code: 'OM', name: 'OMAN' },
    { code: 'PK', name: 'PAKISTAN' },
    { code: 'PW', name: 'PALAU' },
    { code: 'PS', name: 'PALESTINE, STATE OF' },
    { code: 'PA', name: 'PANAMA' },
    { code: 'PG', name: 'PAPUA NEW GUINEA' },
    { code: 'PY', name: 'PARAGUAY' },
    { code: 'PE', name: 'PERU' },
    { code: 'PH', name: 'PHILIPPINES' },
    { code: 'PN', name: 'PITCAIRN' },
    { code: 'PL', name: 'POLAND' },
    { code: 'PT', name: 'PORTUGAL' },
    { code: 'PR', name: 'PUERTO RICO' },
    { code: 'QA', name: 'QATAR' },
    { code: 'RE', name: 'REUNION' },
    { code: 'RO', name: 'ROMANIA' },
    { code: 'RU', name: 'RUSSIAN FEDERATION' },
    { code: 'RW', name: 'RWANDA' },
    { code: 'BL', name: 'SAINT BARTHELEMY' },
    { code: 'SH', name: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA' },
    { code: 'KN', name: 'SAINT KITTS AND NEVIS' },
    { code: 'LC', name: 'SAINT LUCIA' },
    { code: 'MF', name: 'SAINT MARTIN (FRENCH PART)' },
    { code: 'PM', name: 'SAINT PIERRE AND MIQUELON' },
    { code: 'VC', name: 'SAINT VINCENT AND THE GRENADINES' },
    { code: 'WS', name: 'SAMOA' },
    { code: 'SM', name: 'SAN MARINO' },
    { code: 'ST', name: 'SAO TOME AND PRINCIPE' },
    { code: 'SA', name: 'SAUDI ARABIA' },
    { code: 'SN', name: 'SENEGAL' },
    { code: 'RS', name: 'SERBIA' },
    { code: 'SC', name: 'SEYCHELLES' },
    { code: 'SL', name: 'SIERRA LEONE' },
    { code: 'SG', name: 'SINGAPORE' },
    { code: 'SX', name: 'SINT MAARTEN (DUTCH PART)' },
    { code: 'SK', name: 'SLOVAKIA' },
    { code: 'SI', name: 'SLOVENIA' },
    { code: 'SB', name: 'SOLOMON ISLANDS' },
    { code: 'SO', name: 'SOMALIA' },
    { code: 'ZA', name: 'SOUTH AFRICA' },
    { code: 'GS', name: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS' },
    { code: 'SS', name: 'SOUTH SUDAN' },
    { code: 'ES', name: 'SPAIN' },
    { code: 'LK', name: 'SRI LANKA' },
    { code: 'SD', name: 'SUDAN' },
    { code: 'SR', name: 'SURINAME' },
    { code: 'SJ', name: 'SVALBARD AND JAN MAYEN' },
    { code: 'SZ', name: 'ESWATINI' },
    { code: 'SE', name: 'SWEDEN' },
    { code: 'CH', name: 'SWITZERLAND' },
    { code: 'SY', name: 'SYRIAN ARAB REPUBLIC' },
    { code: 'TW', name: 'TAIWAN, PROVINCE OF CHINA' },
    { code: 'TJ', name: 'TAJIKISTAN' },
    { code: 'TZ', name: 'TANZANIA, UNITED REPUBLIC OF' },
    { code: 'TH', name: 'THAILAND' },
    { code: 'TL', name: 'TIMOR-LESTE' },
    { code: 'TG', name: 'TOGO' },
    { code: 'TK', name: 'TOKELAU' },
    { code: 'TO', name: 'TONGA' },
    { code: 'TT', name: 'TRINIDAD AND TOBAGO' },
    { code: 'TN', name: 'TUNISIA' },
    { code: 'TR', name: 'TURKEY' },
    { code: 'TM', name: 'TURKMENISTAN' },
    { code: 'TC', name: 'TURKS AND CAICOS ISLANDS' },
    { code: 'TV', name: 'TUVALU' },
    { code: 'UG', name: 'UGANDA' },
    { code: 'UA', name: 'UKRAINE' },
    { code: 'AE', name: 'UNITED ARAB EMIRATES' },
    { code: 'GB', name: 'UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND' },
    { code: 'US', name: 'UNITED STATES' },
    { code: 'UM', name: 'UNITED STATES MINOR OUTLYING ISLANDS' },
    { code: 'UY', name: 'URUGUAY' },
    { code: 'UZ', name: 'UZBEKISTAN' },
    { code: 'VU', name: 'VANUATU' },
    { code: 'VE', name: 'VENEZUELA, BOLIVARIAN REPUBLIC OF' },
    { code: 'VN', name: 'VIET NAM' },
    { code: 'VG', name: 'VIRGIN ISLANDS, BRITISH' },
    { code: 'VI', name: 'VIRGIN ISLANDS, U.S.' },
    { code: 'WF', name: 'WALLIS AND FUTUNA' },
    { code: 'EH', name: 'WESTERN SAHARA' },
    { code: 'YE', name: 'YEMEN' },
    { code: 'ZM', name: 'ZAMBIA' },
    { code: 'ZW', name: 'ZIMBABWE' },
    { code: 'XK', name: 'KOSOVO' },
    { code: 'X5', name: 'STATELESS' },
    { code: 'XX', name: 'OTHER COUNTRY' }
  ];


  natureOptionsAC = [
    { value: '01', viewValue: 'Terrains nus' },
    { value: '02', viewValue: 'Terrains aménagés' },
    { value: '03', viewValue: 'Terrains bâtis' },
    { value: '04', viewValue: 'Agencement et aménagements des terrains' },
    { value: '05', viewValue: 'Bâtiments' },
    { value: '06', viewValue: 'Installations générales, agencements et aménagements des constructions' },
    { value: '07', viewValue: 'Ouvrages d\'infrastructure' },
    { value: '08', viewValue: 'Constructions sur sol d\'autrui' },
    { value: '09', viewValue: 'Installations techniques' },
    { value: '10', viewValue: 'Matériel industriel' },
    { value: '11', viewValue: 'Outillage industriel' },
    { value: '12', viewValue: 'Agencements et aménagements du matériel et outillage industriels' },
    { value: '13', viewValue: 'Matériel de transports de biens' },
    { value: '14', viewValue: 'Matériel de transports de personnes' },
    { value: '15', viewValue: 'Installations générales, agencements et aménagements divers' },
    { value: '16', viewValue: 'Equipement de bureau' },
    { value: '17', viewValue: 'Emballages récupérables identifiables' },
    { value: 'AutreNatureActifCorporel', viewValue: 'Autre Nature Actif Corporel' }
 
    
  ];
  
  selectedNatureAC: string;
  isAutreSelectedAC: boolean;
  
  onNatureChangeAC(event: any) {
    this.selectedNatureAC = event.value;
    this.isAutreSelectedAC = this.selectedNatureAC === 'AutreNatureActifCorporel';
  }
  


 


  selectedNatureNRAC: string;
  isAutreSelectedNRAC: boolean;
  natureOptionsNRAC = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];
  onNatureChangeNRAC(event: any) {
    this.selectedNatureNRAC = event.value;
    this.isAutreSelectedNRAC = this.selectedNatureNRAC === 'AutreNatureRelation';
  }


 


  goToNextFormAC() {
    if(this.step4Form.invalid){
      Object.keys(this.step4Form.controls).forEach(key => {
        this.step4Form.get(key).markAsTouched();
      });
      console.log("invalid");
      return
    }else{
      this.currentForm++;
      this.step4Submit()
    }

  }



  selectedOptionAC: string = 'MatriculeFiscal'; 
  
  onOptionChangeAC(event: any) {
      this.selectedOptionAC= event.value;
    }
  
 
  qualiteEntrepriseAC: QualiteEntreprise = {
    key1: null,
    key2: null,
    key3: null,
    key4: null,
    key5: null,
    key6: {
      key: null,
      value: ''
    },
  };

  showInputAC: boolean = false;
  onCheckboxChangeAC(event: any) {
    this.qualiteEntrepriseAC.key1 = (event.source.checked && event.source.value === '1') ? event.source.value : (!event.source.checked && event.source.value === '1' ? null : this.qualiteEntrepriseAC.key1);
    this.qualiteEntrepriseAC.key2 = (event.source.checked && event.source.value === '2') ? event.source.value : (!event.source.checked && event.source.value === '2' ? null : this.qualiteEntrepriseAC.key2);
    this.qualiteEntrepriseAC.key3 = (event.source.checked && event.source.value === '3') ? event.source.value : (!event.source.checked && event.source.value === '3' ? null : this.qualiteEntrepriseAC.key3);
    this.qualiteEntrepriseAC.key4 = (event.source.checked && event.source.value === '4') ? event.source.value : (!event.source.checked && event.source.value === '4' ? null : this.qualiteEntrepriseAC.key4);
    this.qualiteEntrepriseAC.key5 = (event.source.checked && event.source.value === '5') ? event.source.value : (!event.source.checked && event.source.value === '5' ? null : this.qualiteEntrepriseAC.key5);
    this.qualiteEntrepriseAC.key6.key = (event.source.checked && event.source.value === '6') ? event.source.value : (!event.source.checked && event.source.value === '6' ? null : this.qualiteEntrepriseAC.key6.key);

    if (event.source.value === '6') {
      this.showInputAC = event.checked;
    }
  }
 







  goToNextFormAI() {
    this.currentForm++;
    this.step5Submit()

  }


  submitted6 = false;
  step6Submit() {
    const idInfoGE = this.shared.getinfoGEdata(); 
    this.submitted6 = true;
   
    if (this.step6Form.invalid) {
      Object.keys(this.step6Form.controls).forEach(key => {
        this.step6Form.get(key).markAsTouched();
      });
      return;   
    }
  
    const newRestructurationsGE: RestructurationsGE = {
      affirmation: this.step6Form.get('affirmation')?.value,
      descripton: this.step6Form.get('descripton')?.value,   
    };
  
   
    console.log(newRestructurationsGE);
  
    
    this.RestructurationGEService.createRestructurationGE(newRestructurationsGE, idInfoGE).subscribe(
      data => {
        console.log('RestructurationsGE linked created:', data);
        console.log('Response data:', data);  
        console.log('Submitted RestructurationsGE:', newRestructurationsGE);
        this.resetForm6();  
      },
      error => {
        console.error('Error creating RestructurationsGE:', error);
         
      }
    );
  }
  
  resetForm6() {
    this.submitted6 = false;
    this.step6Form.reset();
  }
  
  
  
  
  textAreaValue: string = 'N';
  showTextArea: boolean = false;
  
  toggleTextArea(event: any) {
    this.showTextArea = event.value === 'O';
  }
}