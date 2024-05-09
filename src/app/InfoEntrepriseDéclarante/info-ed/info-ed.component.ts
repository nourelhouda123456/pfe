import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentifiantEntreprise } from 'app/models/IdentifiantEntreprise';
import { InfoED } from 'app/models/InfoDeclaration';
import { ModifLienC } from 'app/models/ModifLienC';
import { ParticipationDeclarante } from 'app/models/ParticipationDeclarante';
import { ParticipationLiee } from 'app/models/ParticipationLiee';
import { QualiteEntreprise } from 'app/models/QualiteEntreprise';

import { ServiceService } from 'app/service.service';
import { SharedServiveService } from 'app/shared-servive.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-info-ed',
  templateUrl: './info-ed.component.html',
  styleUrls: ['./info-ed.component.css']
})
export class InfoEDComponent implements OnInit {
  qualiteEntreprise: QualiteEntreprise = {
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
  countries = [
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


  selectedQualitePD: string;
  
  qualiteOptionsPD = [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangePD(event: any) {
    this.selectedQualitePD = event.value;
  }



  selectedOption: string = '';
  isAutreSelected: boolean = false;



  // Method to check if "Autre" is selected
  onSelectionChange(event: any) {

    this.isAutreSelected = event.value === 'Autre';
  }








  currentForm = 1;



  goToNextForm() {
    if(this.stepTwoForm.invalid){
      Object.keys(this.stepTwoForm.controls).forEach(key => {
        this.stepTwoForm.get(key).markAsTouched();
      });
      console.log("invalid");
      return
    }else{
      this.currentForm++;
      this.stepTwoSubmit()
    }

  }




  stepTwoForm: FormGroup = new FormGroup({

    changementsActivite: new FormControl(''),
    DescriptionActivitePrincipale: new FormControl(''),


  });

  step2Form: FormGroup = new FormGroup({

    raisonSociale: new FormControl(''),
    pourcentageDetentionCapital: new FormControl(''),
    pourcentageDetentionDroitsVote: new FormControl(''),
    MatriculeFiscal: new FormControl(''),
    Identifiant: new FormControl(''),
    EtatTerritoire: new FormControl(''),

    AutreQualite: new FormControl(''),
  });



  step3Form: FormGroup = new FormGroup({

    raisonSocialePD: new FormControl(''),
    pourcentageDetentionCapitalPD: new FormControl(''),
    pourcentageDetentionDroitsVotePD: new FormControl(''),
    MatriculeFiscalPD: new FormControl(''),
    IdentifiantPD: new FormControl(''),
    EtatTerritoirePD: new FormControl(''),
    AutreQualite: new FormControl(''),

  });


  step4Form: FormGroup = new FormGroup({

    affirmation: new FormControl(''),
    description: new FormControl(''),
    

  });


  @Input() idDeclaration: number;
  showInput: boolean = false;

  submitted = false;
  submitted2 = false;
  submitted3 = false;
  submitted4 = false;
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
  };
  allComplete: boolean = false;
  textAreaValue: string = 'N';
  showTextArea: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private InfoEDService: ServiceService,
    private shared: SharedServiveService,
    private ParticipationLieeService: ServiceService,
    private ModifLienCService:ServiceService
  ) { }
  defaultValue = 'N';
  defaultValueDescription = 'N';
  ngOnInit(): void {

    this.stepTwoForm = this.formBuilder.group({




      qualiteEntreprise: [''],

      changementsActivite: [this.defaultValue],
      descriptionActivitePrincipale: [
        '',
        [
          Validators.required,

        ]
      ],

      description2: ['' ]
    });

    this.step2Form = this.formBuilder.group({
      AutreQualite: [''],
      raisonSociale: [''],

      identifiantEntreprise: [''],

      qualiteEntreprise: [''],

      pourcentageDetentionCapital: [''],
      pourcentageDetentionDroitsVote: [''],
      MatriculeFiscal: [''],
      Identifiant: [''],
      EtatTerritoire: [''],



    });



    this.step3Form = this.formBuilder.group({
      AutreQualite: [''],
      raisonSocialePD:[''],
        



      qualiteEntreprise: [''],

      pourcentageDetentionCapitalPD: [''],
      pourcentageDetentionDroitsVotePD: [''],
      MatriculeFiscalPD: [''],

      IdentifiantPD: [''],
      EtatTerritoirePD: [''],



    });


    this.step4Form = this.formBuilder.group({
      affirmation: [this.defaultValueDescription],
      description:[''],
   
    });


  }


  get f(): { [key: string]: AbstractControl } {
    return this.stepTwoForm.controls;
  }



  onReset(): void {
    this.submitted = false;
    this.stepTwoForm.reset();
  }

  updateAllComplete() {
    this.allComplete = this.task.completed;
  }

  someComplete(): boolean {
    return this.task.completed && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    this.task.completed = completed;
  }

  onCheckboxChange(event: any) {
    this.qualiteEntreprise.key1 = (event.source.checked && event.source.value === '1') ? event.source.value : (!event.source.checked && event.source.value === '1' ? null : this.qualiteEntreprise.key1);
    this.qualiteEntreprise.key2 = (event.source.checked && event.source.value === '2') ? event.source.value : (!event.source.checked && event.source.value === '2' ? null : this.qualiteEntreprise.key2);
    this.qualiteEntreprise.key3 = (event.source.checked && event.source.value === '3') ? event.source.value : (!event.source.checked && event.source.value === '3' ? null : this.qualiteEntreprise.key3);
    this.qualiteEntreprise.key4 = (event.source.checked && event.source.value === '4') ? event.source.value : (!event.source.checked && event.source.value === '4' ? null : this.qualiteEntreprise.key4);
    this.qualiteEntreprise.key5 = (event.source.checked && event.source.value === '5') ? event.source.value : (!event.source.checked && event.source.value === '5' ? null : this.qualiteEntreprise.key5);
    this.qualiteEntreprise.key6.key = (event.source.checked && event.source.value === '6') ? event.source.value : (!event.source.checked && event.source.value === '6' ? null : this.qualiteEntreprise.key6.key);

    if (event.source.value === '6') {
      this.showInput = event.checked;
    }
  }





  toggleTextArea(event: any) {
    this.showTextArea = event.value === 'O';
  }



  getCookie(name: string): string {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }


  declarationId: number;

  stepTwoSubmit(): void {
    const idDeclaration = this.shared.getData(); 
    this.submitted = true;
    console.log(this.stepTwoForm);
    
    if (this.stepTwoForm.invalid) {
      Object.keys(this.stepTwoForm.controls).forEach(key => {
        this.stepTwoForm.get(key).markAsTouched();
      });
      console.log("invalid");
      
      return;
    }
    console.log('id'+idDeclaration)
    this.qualiteEntreprise.key6.value = this.qualiteEntreprise.key6.key === '6' ? this.stepTwoForm.get('qualiteEntreprise')?.value : null
    const newInfoED: InfoED = {
      qualiteEntreprise: JSON.stringify(this.qualiteEntreprise),
      descriptionActivitePrincipale: this.stepTwoForm.get('descriptionActivitePrincipale')?.value,
      changementsActivite: this.stepTwoForm.get('changementsActivite')?.value,
      description2: this.stepTwoForm.get('description2')?.value,
    };

    //this.idDeclaration = this.shared.getData().id
    this.InfoEDService.createInfoDeclaration(newInfoED, idDeclaration  ).subscribe(
      data => {
        console.log('InfoED created:', data);
        this.shared.setinfoEDdata(data.id);
        console.log("qualite" + newInfoED.qualiteEntreprise)
        console.log("changementsActivite" + newInfoED.changementsActivite)

      },
      error => {
        console.error('Error creating InfoED:', error);
      }
    );
  }








  jsonObject:any
  step2Submit(): void {
    const idInfoED = this.shared.getinfoEDdata(); 
    this.submitted2 = true;
    
    if (this.step2Form.invalid) {
      return;
    }
    if (this.selectedQualite === "AutreQualite"){
      

      
      this.jsonObject = {
        AutreQualite: this.step2Form.get('AutreQualite').value
    }}

     if(this.selectedOption1 === "MatriculeFiscal"){
       this.identifiantEntreprise = {
        MatriculeFiscal : this.step2Form.get('MatriculeFiscal')?.value
      }
    }else if(this.selectedOption1 === "Identifiant"){
      this.identifiantEntreprise = {
        Identifiant : this.step2Form.get('Identifiant')?.value
      }
    }else if(this.selectedOption1 === "EtatTerritoire"){
      this.identifiantEntreprise = {
        EtatTerritoire : this.step2Form.get('EtatTerritoire')?.value
      }
    }
    console.log(this.identifiantEntreprise);
    
    const newEntrepriseLiee: ParticipationLiee = {
      qualiteEntreprise: (this.step2Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step2Form.get('qualiteEntreprise')?.value,
      identifiantEntreprise: JSON.stringify(this.identifiantEntreprise),
      raisonSociale: this.step2Form.get('raisonSociale')?.value,
      pourcentage_detention_capital: this.step2Form.get('pourcentageDetentionCapital')?.value,
      pourcentage_detention_droits_vote: this.step2Form.get('pourcentageDetentionDroitsVote')?.value,

    };
    console.log(newEntrepriseLiee);

    //this.idDeclaration = this.shared.getData().id
    this.ParticipationLieeService.createParticipationLiee(newEntrepriseLiee, idInfoED).subscribe(
      data2 => {
        console.log('entreprise liee created:', data2);
        console.log(data2);
        console.log(newEntrepriseLiee);
      },
      error => {
        console.error('Error creating entreprise liee:', error);
      }
    );
  }















  identifiantEntreprise : any
 



  selectedOption1: string = 'MatriculeFiscal'; 
   
  

  onOptionChange2(event: any) {
    this.selectedOption1 = event.value;
    
  }

  countries2 = [
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






  selectedOptionEL: string = '';
  isAutreSelectedEL: boolean = false;


  showInput2: boolean = false;



  get f2(): { [key: string]: AbstractControl } {
    return this.step2Form.controls;
  }



 


  goToNextForm2() {
    if(this.step2Form.invalid){
      Object.keys(this.step2Form.controls).forEach(key => {
        this.step2Form.get(key).markAsTouched();
      });
      console.log("invalid");
      return
    }else{
      this.currentForm++;
      this.step2Submit()
    }


  }


  goToNextForm3() {
    if(this.step3Form.invalid){
      Object.keys(this.step3Form.controls).forEach(key => {
        this.step3Form.get(key).markAsTouched();
      });
      console.log("invalid");
      return
    }else{
      this.currentForm++;
      this.step3Submit()
    }


  }




  textAreaValueDescription: string = 'N';
  showTextAreaDescription: boolean = false;
  
  toggleTextAreaDescription(event: any) {
    this.showTextAreaDescription = event.value === 'O';
  }
































 

 


  countries3 = [
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






  selectedOptionED: string = '';
  isAutreSelectedED: boolean = false;


  showInput3: boolean = false;


  get f3(): { [key: string]: AbstractControl } {
    return this.step3Form.controls;
  }


  selectedOptionPD: string = 'MatriculeFiscalPD';  
  



  onOptionChange3(event: any) {
    this.selectedOptionPD = event.value;

    


  }










  

  step3Submit(): void {
    this.submitted3 = true;
    const idInfoED = this.shared.getinfoEDdata(); 
    if (this.step3Form.invalid) {
      return;
    }

    if (this.selectedQualite === "AutreQualite"){
      

      
      this.jsonObject = {
        AutreQualite: this.step3Form.get('AutreQualite').value
    }}

     if(this.selectedOptionPD === "MatriculeFiscal"){
       this.identifiantEntreprise = {
        MatriculeFiscal : this.step3Form.get('MatriculeFiscal')?.value
      }
    }else if(this.selectedOptionPD === "Identifiant"){
      this.identifiantEntreprise = {
        Identifiant : this.step3Form.get('Identifiant')?.value
      }
    }else if(this.selectedOptionPD === "EtatTerritoire"){
      this.identifiantEntreprise = {
        EtatTerritoire : this.step3Form.get('EtatTerritoire')?.value
      }
    }
    console.log(this.identifiantEntreprise);
     const newEntrepriseDeclarante: ParticipationDeclarante = {
      qualiteEntreprise: (this.step3Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step3Form.get('qualiteEntreprise')?.value,
      identifiantEntreprise: this.step3Form.get('identifiantEntreprise')?.value,
      raisonSociale: this.step3Form.get('raisonSocialePD')?.value,
      pourcentage_detention_capital: this.step3Form.get('pourcentageDetentionCapitalPD')?.value,
      pourcentage_detention_droits_vote: this.step3Form.get('pourcentageDetentionDroitsVotePD')?.value,

    };
    console.log(newEntrepriseDeclarante);

    //this.idDeclaration = this.shared.getData().id
    this.ParticipationLieeService.createParticipationDeclarante(newEntrepriseDeclarante, idInfoED).subscribe(
      data2 => {
        console.log('entreprise liee created:', data2);
        console.log(data2);
        console.log(newEntrepriseDeclarante);
      },
      error => {
        console.error('Error creating entreprise declarante:', error);
      }
    );
  }


















  step4Submit(): void {
    this.submitted3 = true;
    const idInfoED = this.shared.getinfoEDdata(); 
    if (this.step3Form.invalid) {
      return;
    }

   
     const newModifLienC: ModifLienC = {
       affirmation: this.step4Form.get('affirmation')?.value,
      description: this.step4Form.get('description')?.value,
      

    };
     
 
    this.ModifLienCService.createModifLienC(newModifLienC, idInfoED).subscribe(
      data2 => {
        console.log('ModifLienC created:', data2);
        console.log(data2);
        console.log(newModifLienC);
      },
      error => {
        console.error('Error creating ModifLienC:', error);
      }
    );
  }

}







































