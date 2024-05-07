import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Entreprise } from 'app/models/entreprise';
import { ServiceService } from 'app/service.service';
 
 
@Component({
  selector: 'compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  form: FormGroup = new FormGroup({
    MatriculeFiscal: new FormControl(''),
    RaisonSociale: new FormControl(''),
    FormeJuridique: new FormControl(''),
    Nationalite: new FormControl(''),
    Adresse: new FormControl(''),
    CodePostal: new FormControl(''),
   
    CodeCategorie: new FormControl(''),
    CodeTVA: new FormControl(''),
    ActivitePrincipale: new FormControl('')
  });

  submitted = false;

  // Define an array of country options
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
  userId: number;
  entreprise: Entreprise;
 
 
  matricule : "";
  constructor(private formBuilder: FormBuilder,
     private router: Router,
      private EntrepriseService: ServiceService,
      private snackBar: MatSnackBar ) {}

  ngOnInit(): void {
    const user = JSON.parse(this.getCookie('user'));
    this.userId = user?.id;
    
    
    // Fetch enterprise data
    this.EntrepriseService.getEntrepriseByUserId(this.userId).subscribe(
      (data: Entreprise) => {
        this.entreprise = data;
      
        // Update form controls with retrieved values
        this.form.patchValue({
          MatriculeFiscal: data.matriculeFiscal,
          RaisonSociale: data.raisonSociale,
          FormeJuridique: data.formeJuridique,
          Nationalite: data.nationalite,
          Adresse: data.adresseSiegeSocialEtablissementTunisie,
          CodePostal: data.codePostal,
          CodeCategorie: data.codeCategorie,
          CodeTVA: data.codeTVA,
          ActivitePrincipale: data.activitePrincipale,
          ActiviteSecondaire: data.activiteSecondaire
        });
      },
      error => {
        console.error('Error fetching entreprise:', error);
      }
    );


    
    this.form = this.formBuilder.group(
      {
        MatriculeFiscal: [
          '',
          [
            Validators.required,
            Validators.minLength(7),
            Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
          ]
        ],


        RaisonSociale: [
          '',
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
          ]
        ],
        
        FormeJuridique: [
          '',
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
          ]
        ],
        Nationalite: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(2),
            Validators.pattern('^[A-Z]{2}$')
          ]
          
        ],


        CodePostal: [
          '',
          [
            Validators.required,
            Validators.pattern('[0-9]{4}')
          ]
          
        ],

      
        
        CodeCategorie: [
          '',
          [
            Validators.required,
            Validators.pattern('^[MNCPES]$') // Regular expression to match M, N, C, P, or E
          ]
        ],


 
        Adresse: [
          '',
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
          ]
        ],
      
         
        
        CodeTVA: [
          '',
          [
            Validators.required,
            Validators.pattern('^[ABPDN]$') // Regular expression to match A, B, P, D, or N
          ]
        ],
      

        ActivitePrincipale: [
          '',
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
          ]
        ],

        ActiviteSecondaire: [
          '',
          [
            
            Validators.maxLength(20),
            Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
          ]
        ],
      }
    );
  }


  

  private getCookie(name: string) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
  
    if (this.form.invalid) {
      return;
    }
  
    const userId = JSON.parse(this.getCookie('user')).id;  
    console.log(userId);
  
    const newEntreprise: Entreprise = {
       
      matriculeFiscal: this.form.get('MatriculeFiscal')?.value,
      raisonSociale: this.form.get('RaisonSociale')?.value,
      formeJuridique: this.form.get('FormeJuridique')?.value,
      nationalite: this.form.get('Nationalite')?.value,
      adresseSiegeSocialEtablissementTunisie: this.form.get('Adresse')?.value,
      codePostal: this.form.get('CodePostal')?.value,
     
      codeCategorie: this.form.get('CodeCategorie')?.value,
      codeTVA: this.form.get('CodeTVA')?.value,
      activitePrincipale: this.form.get('ActivitePrincipale')?.value,
      activiteSecondaire: this.form.get('ActiviteSecondaire')?.value,
      declarations: null 
    };
  
    this.EntrepriseService.createEntreprise(newEntreprise, userId).subscribe(
      data => {
        console.log('Entreprise created:', data);
        this.router.navigate(['/dashboard']);
        
        
        this.snackBar.open('Done !', 'Fermer', {
          duration: 2000,   
          panelClass: ['success-snackbar'], 
          verticalPosition: 'top',  
          horizontalPosition: 'center'  
          
          });
      },
      error => {
       
        console.log(error)
  
     
      }
    );
  }
  
  

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  

  
}
