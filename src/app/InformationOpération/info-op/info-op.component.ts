import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutreOperation } from 'app/models/AutreOperation';
import { CessionAcquisitionActif } from 'app/models/CessionAcquisitionActif';
import { ContrepartieNonMonetaire } from 'app/models/ContrepartieNonMonetaire';
import { DescriptionTransactionsRegimeFiscalPrivilegie } from 'app/models/DescriptionTransactionsRegimeFiscalPrivilegie';
import { EmpruntContracte } from 'app/models/EmpruntContracte';
import { Financiere } from 'app/models/Financiere';
import { OperationsAccordsPrealables } from 'app/models/OperationsAccordsPrealables';
import { PretAccorde } from 'app/models/PretAccorde';
import { RemunerationsBiens } from 'app/models/RemunerationsBiens';
import { Service } from 'app/models/Service';
 
import { ValeurExploitation } from 'app/models/ValeurExploitation';
import { ServiceService } from 'app/service.service';
import { SharedServiveService } from 'app/shared-servive.service';

@Component({
  selector: 'app-info-op',
  templateUrl: './info-op.component.html',
  styleUrls: ['./info-op.component.css']
})
export class InfoOpComponent implements OnInit {
  showInputFields: boolean = false;
  showButton: boolean = true;

  onAffirmationChange(event: any) {
    this.showInputFields = event.value === 'O';
    this.showButton = event.value !== 'O';  
  }
  
  
  showInputFieldsOAP: boolean = false;
  showButtonOAP: boolean = true;

  onAffirmationChangeOperationsAccordsPrealables(event: any) {
    this.showInputFieldsOAP = event.value === 'O';
    this.showButtonOAP = event.value !== 'O';  
  }

  selectedNatureVE: string;
  selectedNatureValeursExploitation: string;
  
  natureOptionsVE = [
    { value: '1', viewValue: 'Matières premières' },
    { value: '2', viewValue: 'Produits finis ou semi-finis' },
    { value: '3', viewValue: 'Marchandises' },
    { value: 'AutreNatureValeurExploitation', viewValue: 'Autre Nature Valeur Exploitation' }
  ];

  natureOptionsValeursExploitation = [
    { value: '1', viewValue: 'Matières premières' },
    { value: '2', viewValue: 'Produits finis ou semi-finis' },
    { value: '3', viewValue: 'Marchandises' },
    { value: 'AutreNatureValeurExploitation', viewValue: 'Autre Nature Valeur Exploitation' }
  ];
  


 
  onNatureChangeVE(event: any) {
    this.selectedNatureVE = event.value;
  }

  onNatureChangeValeursExploitation(event: any) {
    this.selectedNatureValeursExploitation = event.value;
  }


  
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
  countries4 = [
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

  countries5 = [
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

  countries6 = [
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

  countries7 = [
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

  countries8 = [
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

  countries9 = [
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


  countries10 = [
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


  currencyOptions = [
    { value: 'AED', viewValue: 'UAE Dirham: UNITED ARAB EMIRATES' },
    { value: 'AFN', viewValue: 'Afghani: AFGHANISTAN' },
    { value: 'ALL', viewValue: 'Lek: ALBANIA' },
    { value: 'AMD', viewValue: 'Armenian Dram: ARMENIA' },
    { value: 'ANG', viewValue: 'Netherlands Antillean Guilder: CURACAO; SINT MAARTEN (DUTCH PART)' },
    { value: 'AOA', viewValue: 'Kwanza: ANGOLA' },
    { value: 'ARS', viewValue: 'Argentine Peso: ARGENTINA' },
    { value: 'AUD', viewValue: 'Australian Dollar: AUSTRALIA; CHRISTMAS ISLAND; COCOS (KEELING) ISLANDS; HEARD ISLAND AND McDONALD ISLANDS; KIRIBATI; NAURU; NORFOLK ISLAND; TUVALU' },
    { value: 'AWG', viewValue: 'Aruban Florin: ARUBA' },
    { value: 'AZN', viewValue: 'Azerbaijan Manat: AZERBAIJAN' },
    { value: 'BAM', viewValue: 'Convertible Mark: BOSNIA AND HERZEGOVINA' },
    { value: 'BBD', viewValue: 'Barbados Dollar: BARBADOS' },
    { value: 'BDT', viewValue: 'Taka: BANGLADESH' },
    { value: 'BGN', viewValue: 'Bulgarian Lev: BULGARIA' },
    { value: 'BHD', viewValue: 'Bahraini Dinar: BAHRAIN' },
    { value: 'BIF', viewValue: 'Burundi Franc: BURUNDI' },
    { value: 'BMD', viewValue: 'Bermudian Dollar: BERMUDA' },
    { value: 'BND', viewValue: 'Brunei Dollar: BRUNEI DARUSSALAM' },
    { value: 'BOB', viewValue: 'Boliviano: BOLIVIA, PLURINATIONAL STATE OF' },
    { value: 'BOV', viewValue: 'Mvdol: BOLIVIA, PLURINATIONAL STATE OF' },
    { value: 'BRL', viewValue: 'Brazilian Real: BRAZIL' },
    { value: 'BSD', viewValue: 'Bahamian Dollar: BAHAMAS' },
    { value: 'BTN', viewValue: 'Ngultrum: BHUTAN' },
    { value: 'BWP', viewValue: 'Pula: BOTSWANA' },
    { value: 'BYN', viewValue: 'Belarusian Ruble: BELARUS' },
    { value: 'BYR', viewValue: 'Historic use: Belarussian Ruble: BELARUS' },
    { value: 'BZD', viewValue: 'Belize Dollar: BELIZE' },
    { value: 'CAD', viewValue: 'Canadian Dollar: CANADA' },
    { value: 'CDF', viewValue: 'Congolese Franc: CONGO, THE DEMOCRATIC REPUBLIC OF' },
    { value: 'CHE', viewValue: 'WIR Euro: SWITZERLAND' },
    { value: 'CHF', viewValue: 'Swiss Franc: LIECHTENSTEIN; SWITZERLAND' },
    { value: 'CHW', viewValue: 'WIR Franc: SWITZERLAND' },
    { value: 'CLF', viewValue: 'Unidad de Fomento: CHILE' },
    { value: 'CLP', viewValue: 'Chilean Peso: CHILE' },
    { value: 'CNY', viewValue: 'Yuan Renminbi: CHINA' },
    { value: 'COP', viewValue: 'Colombian Peso: COLOMBIA' },
    { value: 'COU', viewValue: 'Unidad de Valor Real: COLOMBIA' },
    { value: 'CRC', viewValue: 'Costa Rican Colon: COSTA RICA' },
    { value: 'CUC', viewValue: 'Peso Convertible: CUBA' },
    { value: 'CUP', viewValue: 'Cuban Peso: CUBA' },
    { value: 'CVE', viewValue: 'Cabo Verde Escudo: CABO VERDE' },
    { value: 'CZK', viewValue: 'Czech Koruna: CZECHIA' },
    { value: 'DJF', viewValue: 'Djibouti Franc: DJIBOUTI' },
    { value: 'DKK', viewValue: 'Danish Krone: DENMARK; FAROE ISLANDS; GREENLAND' },
    { value: 'DOP', viewValue: 'Dominican Peso: DOMINICAN REPUBLIC' },
    { value: 'DZD', viewValue: 'Algerian Dinar: ALGERIA' },
    { value: 'EGP', viewValue: 'Egyptian Pound: EGYPT' },
    { value: 'ERN', viewValue: 'Nakfa: ERITREA' },
    { value: 'ETB', viewValue: 'Ethiopian Birr: ETHIOPIA' },
    { value: 'EUR', viewValue: 'Euro: ALAND ISLANDS; ANDORRA; AUSTRIA; BELGIUM; CYPRUS; ESTONIA; EUROPEAN UNION; FINLAND; FRANCE; FRENCH GUIANA; FRENCH SOUTHERN TERRITORIES; GERMANY; GREECE; GUADELOUPE; HOLY SEE (VATICAN CITY STATE); IRELAND; ITALY; LATVIA; LITHUANIA; LUXEMBOURG; MALTA; MARTINIQUE; MAYOTTE; MONACO; MONTENEGRO; NETHERLANDS; PORTUGAL; REUNION; SAINT BARTHELEMY; SAINT MARTIN (FRENCH PART); SAINT PIERRE AND MIQUELON; SAN MARINO; SLOVAKIA; SLOVENIA; SPAIN; Vatican City State (HOLY SEE)' },
    { value: 'FJD', viewValue: 'Fiji Dollar: FIJI' },
    { value: 'FKP', viewValue: 'Falkland Islands Pound: FALKLAND ISLANDS (MALVINAS)' },
    { value: 'GBP', viewValue: 'Pound Sterling: GUERNSEY; ISLE OF MAN; JERSEY; UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND' },
    { value: 'GEL', viewValue: 'Lari: GEORGIA' },
    { value: 'GHS', viewValue: 'Ghana Cedi: GHANA' },
    { value: 'GIP', viewValue: 'Gibraltar Pound: GIBRALTAR' },
    { value: 'GMD', viewValue: 'Dalasi: GAMBIA' },
    { value: 'GNF', viewValue: 'Guinean Franc: GUINEA' },
    { value: 'GTQ', viewValue: 'Quetzal: GUATEMALA' },
    { value: 'GYD', viewValue: 'Guyana Dollar: GUYANA' },
    { value: 'HKD', viewValue: 'Hong Kong Dollar: HONG KONG' },
    { value: 'HNL', viewValue: 'Lempira: HONDURAS' },
    { value: 'HRK', viewValue: 'Kuna: CROATIA' },
    { value: 'HTG', viewValue: 'Gourde: HAITI' },
    { value: 'HUF', viewValue: 'Forint: HUNGARY' },
    { value: 'IDR', viewValue: 'Rupiah: INDONESIA' },
    { value: 'ILS', viewValue: 'New Israeli Sheqel: ISRAEL' },
    { value: 'INR', viewValue: 'Indian Rupee: BHUTAN; INDIA' },
    { value: 'IQD', viewValue: 'Iraqi Dinar: IRAQ' },
    { value: 'IRR', viewValue: 'Iranian Rial: IRAN, ISLAMIC REPUBLIC OF' },
    { value: 'ISK', viewValue: 'Iceland Krona: ICELAND' },
    { value: 'JMD', viewValue: 'Jamaican Dollar: JAMAICA' },
    { value: 'JOD', viewValue: 'Jordanian Dinar: JORDAN' },
    { value: 'JPY', viewValue: 'Yen: JAPAN' },
    { value: 'KES', viewValue: 'Kenyan Shilling: KENYA' },
    { value: 'KGS', viewValue: 'Som: KYRGYZSTAN' },
    { value: 'KHR', viewValue: 'Riel: CAMBODIA' },
    { value: 'KMF', viewValue: 'Comorian Franc : COMOROS' },
    { value: 'KPW', viewValue: 'North Korean Won: KOREA, DEMOCRATIC PEOPLE’S REPUBLIC OF' },
    { value: 'KRW', viewValue: 'Won: KOREA, REPUBLIC OF' },
    { value: 'KWD', viewValue: 'Kuwaiti Dinar: KUWAIT' },
    { value: 'KYD', viewValue: 'Cayman Islands Dollar: CAYMAN ISLANDS' },
    { value: 'KZT', viewValue: 'Tenge: KAZAKHSTAN' },
    { value: 'LAK', viewValue: 'Lao Kip: LAO PEOPLE’S DEMOCRATIC REPUBLIC' },
    { value: 'LBP', viewValue: 'Lebanese Pound: LEBANON' },
    { value: 'LKR', viewValue: 'Sri Lanka Rupee: SRI LANKA' },
    { value: 'LRD', viewValue: 'Liberian Dollar: LIBERIA' },
    { value: 'LSL', viewValue: 'Loti: LESOTHO' },
    { value: 'LTL', viewValue: 'Historic use: Lithuanian Litas: LITHUANIA' },
    { value: 'LVL', viewValue: 'Historic use: Latvian Lats: LATVIA' },
    { value: 'LYD', viewValue: 'Libyan Dinar: LIBYA' },
    { value: 'MAD', viewValue: 'Moroccan Dirham: MOROCCO; WESTERN SAHARA' },
    { value: 'MDL', viewValue: 'Moldovan Leu: MOLDOVA, REPUBLIC OF' },
    { value: 'MGA', viewValue: 'Malagasy Ariary: MADAGASCAR' },
    { value: 'MKD', viewValue: 'Denar: MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF' },
    { value: 'MMK', viewValue: 'Kyat: MYANMAR' },
    { value: 'MNT', viewValue: 'Tugrik: MONGOLIA' },
    { value: 'MOP', viewValue: 'Pataca: MACAO' },
    { value: 'MRO', viewValue: 'Historic use: Ouguiya: MAURITANIA' },
    { value: 'MRU', viewValue: 'Ouguiya: MAURITANIA' },
    { value: 'MUR', viewValue: 'Mauritius Rupee: MAURITIUS' },
    { value: 'MVR', viewValue: 'Rufiyaa: MALDIVES' },
    { value: 'MWK', viewValue: 'Malawi Kwacha: MALAWI' },
    { value: 'MXN', viewValue: 'Mexican Peso: MEXICO' },
    { value: 'MXV', viewValue: 'Mexican Unidad de Inversion (UDI): MEXICO' },
    { value: 'MYR', viewValue: 'Malaysian Ringgit: MALAYSIA' },
    { value: 'MZN', viewValue: 'Mozambique Metical: MOZAMBIQUE' },
    { value: 'NAD', viewValue: 'Namibia Dollar: NAMIBIA' },
    { value: 'NGN', viewValue: 'Naira: NIGERIA' },
    { value: 'NIO', viewValue: 'Cordoba Oro: NICARAGUA' },
    { value: 'NOK', viewValue: 'Norwegian Krone: BOUVET ISLAND; NORWAY; SVALBARD AND JAN MAYEN' },
    { value: 'NPR', viewValue: 'Nepalese Rupee: NEPAL' },
    { value: 'NZD', viewValue: 'New Zealand Dollar: COOK ISLANDS; NEW ZEALAND; NIUE; PITCAIRN; TOKELAU' },
    { value: 'OMR', viewValue: 'Rial Omani: OMAN' },
    { value: 'PAB', viewValue: 'Balboa: PANAMA' },
    { value: 'PEN', viewValue: 'Sol: PERU' },
    { value: 'PGK', viewValue: 'Kina: PAPUA NEW GUINEA' },
    { value: 'PHP', viewValue: 'Philippine Peso: PHILIPPINES' },
    { value: 'PKR', viewValue: 'Pakistan Rupee: PAKISTAN' },
    { value: 'PLN', viewValue: 'Zloty: POLAND' },
    { value: 'PYG', viewValue: 'Guarani: PARAGUAY' },
    { value: 'QAR', viewValue: 'Qatari Rial: QATAR' },
    { value: 'RON', viewValue: 'Romanian Leu: ROMANIA' },
    { value: 'RSD', viewValue: 'Serbian Dinar: SERBIA' },
    { value: 'RUB', viewValue: 'Russian Ruble: RUSSIAN FEDERATION' },
    { value: 'RWF', viewValue: 'Rwanda Franc: RWANDA' },
    { value: 'SAR', viewValue: 'Saudi Riyal: SAUDI ARABIA' },
    { value: 'SBD', viewValue: 'Solomon Islands Dollar: SOLOMON ISLANDS' },
    { value: 'SCR', viewValue: 'Seychelles Rupee: SEYCHELLES' },
    { value: 'SDG', viewValue: 'Sudanese Pound: SUDAN' },
    { value: 'SEK', viewValue: 'Swedish Krona: SWEDEN' },
    { value: 'SGD', viewValue: 'Singapore Dollar: SINGAPORE' },
    { value: 'SHP', viewValue: 'Saint Helena Pound: SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA' },
    { value: 'SLL', viewValue: 'Leone: SIERRA LEONE' },
    { value: 'SOS', viewValue: 'Somali Shilling: SOMALIA' },
    { value: 'SRD', viewValue: 'Surinam Dollar: SURINAME' },
    { value: 'SSP', viewValue: 'South Sudanese Pound: SOUTH SUDAN' },
    { value: 'STD', viewValue: 'Historic use: Dobra: SAO TOME AND PRINCIPE' },
    { value: 'STN', viewValue: 'Dobra: SAO TOME AND PRINCIPE' },
    { value: 'SVC', viewValue: 'El Salvador Colon: EL SALVADOR' },
    { value: 'SYP', viewValue: 'Syrian Pound: SYRIAN ARAB REPUBLIC' },
    { value: 'SZL', viewValue: 'Lilangeni: ESWATINI' },
    { value: 'THB', viewValue: 'Baht: THAILAND' },
    { value: 'TJS', viewValue: 'Somoni: TAJIKISTAN' },
    { value: 'TMT', viewValue: 'Turkmenistan New Manat: TURKMENISTAN' },
    { value: 'TND', viewValue: 'Tunisian Dinar: TUNISIA' },
    { value: 'TOP', viewValue: 'Pa’anga: TONGA' },
    { value: 'TRY', viewValue: 'Turkish Lira: TURKEY' },
    { value: 'TTD', viewValue: 'Trinidad and Tobago Dollar: TRINIDAD AND TOBAGO' },
    { value: 'TWD', viewValue: 'New Taiwan Dollar: TAIWAN, PROVINCE OF CHINA' },
    { value: 'TZS', viewValue: 'Tanzanian Shilling: TANZANIA, UNITED REPUBLIC OF' },
    { value: 'UAH', viewValue: 'Hryvnia: UKRAINE' },
    { value: 'UGX', viewValue: 'Uganda Shilling: UGANDA' },
    { value: 'USD', viewValue: 'US Dollar: AMERICAN SAMOA; BONAIRE; SINT EUSTATIUS AND SABA; BRITISH INDIAN OCEAN TERRITORY; ECUADOR; EL SALVADOR; GUAM; HAITI; MARSHALL ISLANDS; MICRONESIA, FEDERATED STATES OF; NORTHERN MARIANA ISLANDS; PALAU; PANAMA; PUERTO RICO; TIMOR-LESTE; TURKS AND CAICOS ISLANDS; UNITED STATES; UNITED STATES MINOR OUTLYING ISLANDS; VIRGIN ISLANDS (BRITISH); VIRGIN ISLANDS (US)' },
    { value: 'USN', viewValue: 'US Dollar (Next day): UNITED STATES' },
    { value: 'USS', viewValue: 'Historic use: US Dollar (Same day): UNITED STATES' },
    { value: 'UYI', viewValue: 'Uruguay Peso en Unidades Indexadas (UI): URUGUAY' },
    { value: 'UYU', viewValue: 'Peso Uruguayo: URUGUAY' },
    { value: 'UYW', viewValue: 'Unidad Previsional: URUGUAY' },
    { value: 'UZS', viewValue: 'Uzbekistan Sum: UZBEKISTAN' },
    { value: 'VEF', viewValue: 'Historic use: Bolivar: VENEZUELA, BOLIVARIAN REPUBLIC OF' },
    { value: 'VES', viewValue: 'Bolívar Soberano: VENEZUELA, BOLIVARIAN REPUBLIC OF' },
    { value: 'VND', viewValue: 'Dong: VIET NAM' },
    { value: 'VUV', viewValue: 'Vatu: VANUATU' },
    { value: 'WST', viewValue: 'Tala: SAMOA' },
    { value: 'XAF', viewValue: 'CFA Franc BEAC: CAMEROON; CENTRAL AFRICAN REPUBLIC; CHAD; CONGO; EQUATORIAL GUINEA; GABON' },
    { value: 'XAG', viewValue: 'Silver: ZZ11_Silver' },
    { value: 'XAU', viewValue: 'Gold: ZZ08_Gold' },
    { value: 'XBA', viewValue: 'Bond Markets Unit European Composite Unit (EURCO): ZZ01_Bond Markets Unit European_EURCO' },
    { value: 'XBB', viewValue: 'Bond Markets Unit European Monetary Unit (E.M.U.-6): ZZ02_Bond Markets Unit European_EMU-6' },
    { value: 'XBC', viewValue: 'Bond Markets Unit European Unit of Account 9 (E.U.A.-9): ZZ03_Bond Markets Unit European_EUA-9' },
    { value: 'XBD', viewValue: 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17): ZZ04_Bond Markets Unit European_EUA-17' },
    { value: 'XCD', viewValue: 'East Caribbean Dollar: ANGUILLA; ANTIGUA AND BARBUDA; DOMINICA; GRENADA; MONTSERRAT; SAINT KITTS AND NEVIS; SAINT LUCIA; SAINT VINCENT AND THE GRENADINES' },
    { value: 'XDR', viewValue: 'SDR (Special Drawing Right): INTERNATIONAL MONETARY FUND (IMF)' },
    { value: 'XFU', viewValue: 'Historic use: UIC-Franc: ZZ05_UIC-Franc' },
    { value: 'XOF', viewValue: 'CFA Franc BCEAO: BENIN; BURKINA FASO; COTE D\'IVOIRE; GUINEA-BISSAU; MALI; NIGER; SENEGAL; TOGO' },
    { value: 'XPD', viewValue: 'Palladium: ZZ09_Palladium' },
    { value: 'XPF', viewValue: 'CFP Franc: FRENCH POLYNESIA; NEW CALEDONIA; WALLIS AND FUTUNA' },
    { value: 'XPT', viewValue: 'Platinum: ZZ10_Platinum' },
    { value: 'XSU', viewValue: 'Sucre: SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE"' },
    { value: 'XUA', viewValue: 'ADB Unit of Account: MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP' },
    { value: 'XXX', viewValue: 'The codes assigned for transactions where no currency is involved: ZZ07_No_Currency' },
    { value: 'YER', viewValue: 'Yemeni Rial: YEMEN' },
    { value: 'ZAR', viewValue: 'Rand: LESOTHO; NAMIBIA; SOUTH AFRICA' },
    { value: 'ZMW', viewValue: 'Zambian Kwacha: ZAMBIA' },
    { value: 'ZWL', viewValue: 'Zimbabwe Dollar: ZIMBABWE' }
  ];

  currencyOptions2 = [
    { value: 'AED', viewValue: 'UAE Dirham: UNITED ARAB EMIRATES' },
    { value: 'AFN', viewValue: 'Afghani: AFGHANISTAN' },
    { value: 'ALL', viewValue: 'Lek: ALBANIA' },
    { value: 'AMD', viewValue: 'Armenian Dram: ARMENIA' },
    { value: 'ANG', viewValue: 'Netherlands Antillean Guilder: CURACAO; SINT MAARTEN (DUTCH PART)' },
    { value: 'AOA', viewValue: 'Kwanza: ANGOLA' },
    { value: 'ARS', viewValue: 'Argentine Peso: ARGENTINA' },
    { value: 'AUD', viewValue: 'Australian Dollar: AUSTRALIA; CHRISTMAS ISLAND; COCOS (KEELING) ISLANDS; HEARD ISLAND AND McDONALD ISLANDS; KIRIBATI; NAURU; NORFOLK ISLAND; TUVALU' },
    { value: 'AWG', viewValue: 'Aruban Florin: ARUBA' },
    { value: 'AZN', viewValue: 'Azerbaijan Manat: AZERBAIJAN' },
    { value: 'BAM', viewValue: 'Convertible Mark: BOSNIA AND HERZEGOVINA' },
    { value: 'BBD', viewValue: 'Barbados Dollar: BARBADOS' },
    { value: 'BDT', viewValue: 'Taka: BANGLADESH' },
    { value: 'BGN', viewValue: 'Bulgarian Lev: BULGARIA' },
    { value: 'BHD', viewValue: 'Bahraini Dinar: BAHRAIN' },
    { value: 'BIF', viewValue: 'Burundi Franc: BURUNDI' },
    { value: 'BMD', viewValue: 'Bermudian Dollar: BERMUDA' },
    { value: 'BND', viewValue: 'Brunei Dollar: BRUNEI DARUSSALAM' },
    { value: 'BOB', viewValue: 'Boliviano: BOLIVIA, PLURINATIONAL STATE OF' },
    { value: 'BOV', viewValue: 'Mvdol: BOLIVIA, PLURINATIONAL STATE OF' },
    { value: 'BRL', viewValue: 'Brazilian Real: BRAZIL' },
    { value: 'BSD', viewValue: 'Bahamian Dollar: BAHAMAS' },
    { value: 'BTN', viewValue: 'Ngultrum: BHUTAN' },
    { value: 'BWP', viewValue: 'Pula: BOTSWANA' },
    { value: 'BYN', viewValue: 'Belarusian Ruble: BELARUS' },
    { value: 'BYR', viewValue: 'Historic use: Belarussian Ruble: BELARUS' },
    { value: 'BZD', viewValue: 'Belize Dollar: BELIZE' },
    { value: 'CAD', viewValue: 'Canadian Dollar: CANADA' },
    { value: 'CDF', viewValue: 'Congolese Franc: CONGO, THE DEMOCRATIC REPUBLIC OF' },
    { value: 'CHE', viewValue: 'WIR Euro: SWITZERLAND' },
    { value: 'CHF', viewValue: 'Swiss Franc: LIECHTENSTEIN; SWITZERLAND' },
    { value: 'CHW', viewValue: 'WIR Franc: SWITZERLAND' },
    { value: 'CLF', viewValue: 'Unidad de Fomento: CHILE' },
    { value: 'CLP', viewValue: 'Chilean Peso: CHILE' },
    { value: 'CNY', viewValue: 'Yuan Renminbi: CHINA' },
    { value: 'COP', viewValue: 'Colombian Peso: COLOMBIA' },
    { value: 'COU', viewValue: 'Unidad de Valor Real: COLOMBIA' },
    { value: 'CRC', viewValue: 'Costa Rican Colon: COSTA RICA' },
    { value: 'CUC', viewValue: 'Peso Convertible: CUBA' },
    { value: 'CUP', viewValue: 'Cuban Peso: CUBA' },
    { value: 'CVE', viewValue: 'Cabo Verde Escudo: CABO VERDE' },
    { value: 'CZK', viewValue: 'Czech Koruna: CZECHIA' },
    { value: 'DJF', viewValue: 'Djibouti Franc: DJIBOUTI' },
    { value: 'DKK', viewValue: 'Danish Krone: DENMARK; FAROE ISLANDS; GREENLAND' },
    { value: 'DOP', viewValue: 'Dominican Peso: DOMINICAN REPUBLIC' },
    { value: 'DZD', viewValue: 'Algerian Dinar: ALGERIA' },
    { value: 'EGP', viewValue: 'Egyptian Pound: EGYPT' },
    { value: 'ERN', viewValue: 'Nakfa: ERITREA' },
    { value: 'ETB', viewValue: 'Ethiopian Birr: ETHIOPIA' },
    { value: 'EUR', viewValue: 'Euro: ALAND ISLANDS; ANDORRA; AUSTRIA; BELGIUM; CYPRUS; ESTONIA; EUROPEAN UNION; FINLAND; FRANCE; FRENCH GUIANA; FRENCH SOUTHERN TERRITORIES; GERMANY; GREECE; GUADELOUPE; HOLY SEE (VATICAN CITY STATE); IRELAND; ITALY; LATVIA; LITHUANIA; LUXEMBOURG; MALTA; MARTINIQUE; MAYOTTE; MONACO; MONTENEGRO; NETHERLANDS; PORTUGAL; REUNION; SAINT BARTHELEMY; SAINT MARTIN (FRENCH PART); SAINT PIERRE AND MIQUELON; SAN MARINO; SLOVAKIA; SLOVENIA; SPAIN; Vatican City State (HOLY SEE)' },
    { value: 'FJD', viewValue: 'Fiji Dollar: FIJI' },
    { value: 'FKP', viewValue: 'Falkland Islands Pound: FALKLAND ISLANDS (MALVINAS)' },
    { value: 'GBP', viewValue: 'Pound Sterling: GUERNSEY; ISLE OF MAN; JERSEY; UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND' },
    { value: 'GEL', viewValue: 'Lari: GEORGIA' },
    { value: 'GHS', viewValue: 'Ghana Cedi: GHANA' },
    { value: 'GIP', viewValue: 'Gibraltar Pound: GIBRALTAR' },
    { value: 'GMD', viewValue: 'Dalasi: GAMBIA' },
    { value: 'GNF', viewValue: 'Guinean Franc: GUINEA' },
    { value: 'GTQ', viewValue: 'Quetzal: GUATEMALA' },
    { value: 'GYD', viewValue: 'Guyana Dollar: GUYANA' },
    { value: 'HKD', viewValue: 'Hong Kong Dollar: HONG KONG' },
    { value: 'HNL', viewValue: 'Lempira: HONDURAS' },
    { value: 'HRK', viewValue: 'Kuna: CROATIA' },
    { value: 'HTG', viewValue: 'Gourde: HAITI' },
    { value: 'HUF', viewValue: 'Forint: HUNGARY' },
    { value: 'IDR', viewValue: 'Rupiah: INDONESIA' },
    { value: 'ILS', viewValue: 'New Israeli Sheqel: ISRAEL' },
    { value: 'INR', viewValue: 'Indian Rupee: BHUTAN; INDIA' },
    { value: 'IQD', viewValue: 'Iraqi Dinar: IRAQ' },
    { value: 'IRR', viewValue: 'Iranian Rial: IRAN, ISLAMIC REPUBLIC OF' },
    { value: 'ISK', viewValue: 'Iceland Krona: ICELAND' },
    { value: 'JMD', viewValue: 'Jamaican Dollar: JAMAICA' },
    { value: 'JOD', viewValue: 'Jordanian Dinar: JORDAN' },
    { value: 'JPY', viewValue: 'Yen: JAPAN' },
    { value: 'KES', viewValue: 'Kenyan Shilling: KENYA' },
    { value: 'KGS', viewValue: 'Som: KYRGYZSTAN' },
    { value: 'KHR', viewValue: 'Riel: CAMBODIA' },
    { value: 'KMF', viewValue: 'Comorian Franc : COMOROS' },
    { value: 'KPW', viewValue: 'North Korean Won: KOREA, DEMOCRATIC PEOPLE’S REPUBLIC OF' },
    { value: 'KRW', viewValue: 'Won: KOREA, REPUBLIC OF' },
    { value: 'KWD', viewValue: 'Kuwaiti Dinar: KUWAIT' },
    { value: 'KYD', viewValue: 'Cayman Islands Dollar: CAYMAN ISLANDS' },
    { value: 'KZT', viewValue: 'Tenge: KAZAKHSTAN' },
    { value: 'LAK', viewValue: 'Lao Kip: LAO PEOPLE’S DEMOCRATIC REPUBLIC' },
    { value: 'LBP', viewValue: 'Lebanese Pound: LEBANON' },
    { value: 'LKR', viewValue: 'Sri Lanka Rupee: SRI LANKA' },
    { value: 'LRD', viewValue: 'Liberian Dollar: LIBERIA' },
    { value: 'LSL', viewValue: 'Loti: LESOTHO' },
    { value: 'LTL', viewValue: 'Historic use: Lithuanian Litas: LITHUANIA' },
    { value: 'LVL', viewValue: 'Historic use: Latvian Lats: LATVIA' },
    { value: 'LYD', viewValue: 'Libyan Dinar: LIBYA' },
    { value: 'MAD', viewValue: 'Moroccan Dirham: MOROCCO; WESTERN SAHARA' },
    { value: 'MDL', viewValue: 'Moldovan Leu: MOLDOVA, REPUBLIC OF' },
    { value: 'MGA', viewValue: 'Malagasy Ariary: MADAGASCAR' },
    { value: 'MKD', viewValue: 'Denar: MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF' },
    { value: 'MMK', viewValue: 'Kyat: MYANMAR' },
    { value: 'MNT', viewValue: 'Tugrik: MONGOLIA' },
    { value: 'MOP', viewValue: 'Pataca: MACAO' },
    { value: 'MRO', viewValue: 'Historic use: Ouguiya: MAURITANIA' },
    { value: 'MRU', viewValue: 'Ouguiya: MAURITANIA' },
    { value: 'MUR', viewValue: 'Mauritius Rupee: MAURITIUS' },
    { value: 'MVR', viewValue: 'Rufiyaa: MALDIVES' },
    { value: 'MWK', viewValue: 'Malawi Kwacha: MALAWI' },
    { value: 'MXN', viewValue: 'Mexican Peso: MEXICO' },
    { value: 'MXV', viewValue: 'Mexican Unidad de Inversion (UDI): MEXICO' },
    { value: 'MYR', viewValue: 'Malaysian Ringgit: MALAYSIA' },
    { value: 'MZN', viewValue: 'Mozambique Metical: MOZAMBIQUE' },
    { value: 'NAD', viewValue: 'Namibia Dollar: NAMIBIA' },
    { value: 'NGN', viewValue: 'Naira: NIGERIA' },
    { value: 'NIO', viewValue: 'Cordoba Oro: NICARAGUA' },
    { value: 'NOK', viewValue: 'Norwegian Krone: BOUVET ISLAND; NORWAY; SVALBARD AND JAN MAYEN' },
    { value: 'NPR', viewValue: 'Nepalese Rupee: NEPAL' },
    { value: 'NZD', viewValue: 'New Zealand Dollar: COOK ISLANDS; NEW ZEALAND; NIUE; PITCAIRN; TOKELAU' },
    { value: 'OMR', viewValue: 'Rial Omani: OMAN' },
    { value: 'PAB', viewValue: 'Balboa: PANAMA' },
    { value: 'PEN', viewValue: 'Sol: PERU' },
    { value: 'PGK', viewValue: 'Kina: PAPUA NEW GUINEA' },
    { value: 'PHP', viewValue: 'Philippine Peso: PHILIPPINES' },
    { value: 'PKR', viewValue: 'Pakistan Rupee: PAKISTAN' },
    { value: 'PLN', viewValue: 'Zloty: POLAND' },
    { value: 'PYG', viewValue: 'Guarani: PARAGUAY' },
    { value: 'QAR', viewValue: 'Qatari Rial: QATAR' },
    { value: 'RON', viewValue: 'Romanian Leu: ROMANIA' },
    { value: 'RSD', viewValue: 'Serbian Dinar: SERBIA' },
    { value: 'RUB', viewValue: 'Russian Ruble: RUSSIAN FEDERATION' },
    { value: 'RWF', viewValue: 'Rwanda Franc: RWANDA' },
    { value: 'SAR', viewValue: 'Saudi Riyal: SAUDI ARABIA' },
    { value: 'SBD', viewValue: 'Solomon Islands Dollar: SOLOMON ISLANDS' },
    { value: 'SCR', viewValue: 'Seychelles Rupee: SEYCHELLES' },
    { value: 'SDG', viewValue: 'Sudanese Pound: SUDAN' },
    { value: 'SEK', viewValue: 'Swedish Krona: SWEDEN' },
    { value: 'SGD', viewValue: 'Singapore Dollar: SINGAPORE' },
    { value: 'SHP', viewValue: 'Saint Helena Pound: SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA' },
    { value: 'SLL', viewValue: 'Leone: SIERRA LEONE' },
    { value: 'SOS', viewValue: 'Somali Shilling: SOMALIA' },
    { value: 'SRD', viewValue: 'Surinam Dollar: SURINAME' },
    { value: 'SSP', viewValue: 'South Sudanese Pound: SOUTH SUDAN' },
    { value: 'STD', viewValue: 'Historic use: Dobra: SAO TOME AND PRINCIPE' },
    { value: 'STN', viewValue: 'Dobra: SAO TOME AND PRINCIPE' },
    { value: 'SVC', viewValue: 'El Salvador Colon: EL SALVADOR' },
    { value: 'SYP', viewValue: 'Syrian Pound: SYRIAN ARAB REPUBLIC' },
    { value: 'SZL', viewValue: 'Lilangeni: ESWATINI' },
    { value: 'THB', viewValue: 'Baht: THAILAND' },
    { value: 'TJS', viewValue: 'Somoni: TAJIKISTAN' },
    { value: 'TMT', viewValue: 'Turkmenistan New Manat: TURKMENISTAN' },
    { value: 'TND', viewValue: 'Tunisian Dinar: TUNISIA' },
    { value: 'TOP', viewValue: 'Pa’anga: TONGA' },
    { value: 'TRY', viewValue: 'Turkish Lira: TURKEY' },
    { value: 'TTD', viewValue: 'Trinidad and Tobago Dollar: TRINIDAD AND TOBAGO' },
    { value: 'TWD', viewValue: 'New Taiwan Dollar: TAIWAN, PROVINCE OF CHINA' },
    { value: 'TZS', viewValue: 'Tanzanian Shilling: TANZANIA, UNITED REPUBLIC OF' },
    { value: 'UAH', viewValue: 'Hryvnia: UKRAINE' },
    { value: 'UGX', viewValue: 'Uganda Shilling: UGANDA' },
    { value: 'USD', viewValue: 'US Dollar: AMERICAN SAMOA; BONAIRE; SINT EUSTATIUS AND SABA; BRITISH INDIAN OCEAN TERRITORY; ECUADOR; EL SALVADOR; GUAM; HAITI; MARSHALL ISLANDS; MICRONESIA, FEDERATED STATES OF; NORTHERN MARIANA ISLANDS; PALAU; PANAMA; PUERTO RICO; TIMOR-LESTE; TURKS AND CAICOS ISLANDS; UNITED STATES; UNITED STATES MINOR OUTLYING ISLANDS; VIRGIN ISLANDS (BRITISH); VIRGIN ISLANDS (US)' },
    { value: 'USN', viewValue: 'US Dollar (Next day): UNITED STATES' },
    { value: 'USS', viewValue: 'Historic use: US Dollar (Same day): UNITED STATES' },
    { value: 'UYI', viewValue: 'Uruguay Peso en Unidades Indexadas (UI): URUGUAY' },
    { value: 'UYU', viewValue: 'Peso Uruguayo: URUGUAY' },
    { value: 'UYW', viewValue: 'Unidad Previsional: URUGUAY' },
    { value: 'UZS', viewValue: 'Uzbekistan Sum: UZBEKISTAN' },
    { value: 'VEF', viewValue: 'Historic use: Bolivar: VENEZUELA, BOLIVARIAN REPUBLIC OF' },
    { value: 'VES', viewValue: 'Bolívar Soberano: VENEZUELA, BOLIVARIAN REPUBLIC OF' },
    { value: 'VND', viewValue: 'Dong: VIET NAM' },
    { value: 'VUV', viewValue: 'Vatu: VANUATU' },
    { value: 'WST', viewValue: 'Tala: SAMOA' },
    { value: 'XAF', viewValue: 'CFA Franc BEAC: CAMEROON; CENTRAL AFRICAN REPUBLIC; CHAD; CONGO; EQUATORIAL GUINEA; GABON' },
    { value: 'XAG', viewValue: 'Silver: ZZ11_Silver' },
    { value: 'XAU', viewValue: 'Gold: ZZ08_Gold' },
    { value: 'XBA', viewValue: 'Bond Markets Unit European Composite Unit (EURCO): ZZ01_Bond Markets Unit European_EURCO' },
    { value: 'XBB', viewValue: 'Bond Markets Unit European Monetary Unit (E.M.U.-6): ZZ02_Bond Markets Unit European_EMU-6' },
    { value: 'XBC', viewValue: 'Bond Markets Unit European Unit of Account 9 (E.U.A.-9): ZZ03_Bond Markets Unit European_EUA-9' },
    { value: 'XBD', viewValue: 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17): ZZ04_Bond Markets Unit European_EUA-17' },
    { value: 'XCD', viewValue: 'East Caribbean Dollar: ANGUILLA; ANTIGUA AND BARBUDA; DOMINICA; GRENADA; MONTSERRAT; SAINT KITTS AND NEVIS; SAINT LUCIA; SAINT VINCENT AND THE GRENADINES' },
    { value: 'XDR', viewValue: 'SDR (Special Drawing Right): INTERNATIONAL MONETARY FUND (IMF)' },
    { value: 'XFU', viewValue: 'Historic use: UIC-Franc: ZZ05_UIC-Franc' },
    { value: 'XOF', viewValue: 'CFA Franc BCEAO: BENIN; BURKINA FASO; COTE D\'IVOIRE; GUINEA-BISSAU; MALI; NIGER; SENEGAL; TOGO' },
    { value: 'XPD', viewValue: 'Palladium: ZZ09_Palladium' },
    { value: 'XPF', viewValue: 'CFP Franc: FRENCH POLYNESIA; NEW CALEDONIA; WALLIS AND FUTUNA' },
    { value: 'XPT', viewValue: 'Platinum: ZZ10_Platinum' },
    { value: 'XSU', viewValue: 'Sucre: SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE"' },
    { value: 'XUA', viewValue: 'ADB Unit of Account: MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP' },
    { value: 'XXX', viewValue: 'The codes assigned for transactions where no currency is involved: ZZ07_No_Currency' },
    { value: 'YER', viewValue: 'Yemeni Rial: YEMEN' },
    { value: 'ZAR', viewValue: 'Rand: LESOTHO; NAMIBIA; SOUTH AFRICA' },
    { value: 'ZMW', viewValue: 'Zambian Kwacha: ZAMBIA' },
    { value: 'ZWL', viewValue: 'Zimbabwe Dollar: ZIMBABWE' }
  ];
  
  selectedNatureRB: string;
   
  
  natureOptionsRB = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];

 

  onNatureChangeRB(event: any) {
    this.selectedNatureRB= event.value;
  }

 
  selectedNatureService: string;
  natureOptionsService = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];

 

  onNatureChangeService(event: any) {
    this.selectedNatureService= event.value;
  }




  selectedNatureFinanciere: string;
  natureOptionsFinanciere = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];

  onNatureChangeFinanciere(event: any) {
    this.selectedNatureFinanciere= event.value;
  }






  selectedNatureCessionAcquisitionActif: string;
  natureOptionsCessionAcquisitionActif = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];

  onNatureChangeCessionAcquisitionActif(event: any) {
    this.selectedNatureCessionAcquisitionActif= event.value;
  }








  selectedNatureAutreOperation: string;
  natureOptionsAutreOperation = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];

  onNatureChangeAutreOperation(event: any) {
    this.selectedNatureAutreOperation= event.value;
  }





  selectedNaturePretAccorde: string;
  natureOptionsPretAccorde = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];

  onNatureChangePretAccorde(event: any) {
    this.selectedNaturePretAccorde= event.value;
  }



 


  selectedNatureEmpruntContracte: string;
  natureOptionsEmpruntContracte= [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: '5', viewValue: 'Autre Nature Relation' }
  ];

  onNatureChangeEmpruntContracte(event: any) {
    this.selectedNatureEmpruntContracte= event.value;
  }


  selectedNatureContrepartieNonMonetaire: string;
  natureOptionsContrepartieNonMonetaire= [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];

  onNatureChangeContrepartieNonMonetaire(event: any) {
    this.selectedNatureContrepartieNonMonetaire= event.value;
  }




  selectedNatureOperationsAccordsPrealables: string;
  natureOptionsOperationsAccordsPrealables = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];

 

  onNatureChangeNatureOperationsAccordsPrealables(event: any) {
    this.selectedNatureOperationsAccordsPrealables= event.value;
  }
  constructor(  private formBuilder: FormBuilder,
    private ValeurExploitationService: ServiceService,
    private RemunerationsBiensService: ServiceService,
    private ServiceService: ServiceService,
    private FinanciereService : ServiceService,
    private CessionAcquisitionActifService: ServiceService,
    private AutreOperationService: ServiceService,
    private PretAccordeService: ServiceService,
    private EmpruntContracteService: ServiceService,
    private DescriptionTransactionsRegimeFiscalPrivilegieService: ServiceService,
    private ContrepartieNonMonetaireService: ServiceService,
    private OperationsAccordsPrealablesService: ServiceService,
    private shared: SharedServiveService,
    
   ) { }
   defaultValue = 'N'; 
   defaultValueE = 'N'; 
   defaultValueCNM = 'N'; 
   defaultValueOAP = 'N'; 

  ngOnInit(): void {
     this.stepFourForm = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      natureOperationValeurExploitation: [''],
      qualiteEntreprise: [''],
      natureRelationEntreprise: [''],
      methodePrixTransfert: [''],
      changementMethodePrixTransfert: [''],
      achatsDepenses:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      ventesRevenus: ['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$') 
        ]
      ],
      AutreMethodeDeterminationPrixTransfert: [''],
      AutreNatureOperation: [''],
      AutreNatureRelation: [''],
      AutreChangementMethodeDeterminationPrixTransfert: [''],
      AutreQualite: [''],
      
      
    }); 
    
    
    this.step5Form = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      qualiteEntreprise: [''],
      natureRelationEntreprise: [''],
      methodePrixTransfert: [''],
      changementMethodePrixTransfert: [''],
      achatsDepenses:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      ventesRevenus: ['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
        ]
      ],


      natureOperationRemunerationsBiens: [''],
      AutreMethodeDeterminationPrixTransfert: [''],
      AutreNatureOperation: [''],
      AutreNatureRelation: [''],
      AutreChangementMethodeDeterminationPrixTransfert: [''],
      AutreQualite: [''],
      
      
      
    });



    this.step6Form = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      qualiteEntreprise: [''],
      natureRelationEntreprise: [''],
      methodePrixTransfert: [''],
      changementMethodePrixTransfert: [''],
      achatsDepenses:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      ventesRevenus: ['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
        ]
      ],


      natureOperationService: [''],
      AutreMethodeDeterminationPrixTransfert: [''],
      AutreNatureOperation: [''],
      AutreNatureRelation: [''],
      AutreChangementMethodeDeterminationPrixTransfert: [''],
      AutreQualite: [''],
      
      
      
    });

    this.step7Form = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      qualiteEntreprise: [''],
      natureRelationEntreprise: [''],
      methodePrixTransfert: [''],
      changementMethodePrixTransfert: [''],
      achatsDepenses:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      ventesRevenus: ['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
        ]
      ],


      natureOperationFinanciere: [''],
      AutreMethodeDeterminationPrixTransfert: [''],
      AutreNatureOperation: [''],
      AutreNatureRelation: [''],
      AutreChangementMethodeDeterminationPrixTransfert: [''],
      AutreQualite: [''],
      
      
      
    });
    this.step0Form = this.formBuilder.group({
      description: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      
      
    });

    this.step8Form = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      qualiteEntreprise: [''],
      natureRelationEntreprise: [''],
      methodePrixTransfert: [''],
      changementMethodePrixTransfert: [''],
      achatsDepenses:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      ventesRevenus: ['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
        ]
      ],


      natureOperationCessionAcquisitionActif: [''],
      AutreMethodeDeterminationPrixTransfert: [''],
      AutreNatureOperation: [''],
      AutreNatureRelation: [''],
      AutreChangementMethodeDeterminationPrixTransfert: [''],
      AutreQualite: [''],
      
      
      
      
      
    });
    

    this.step9Form = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      qualiteEntreprise: [''],
      natureRelationEntreprise: [''],
      methodePrixTransfert: [''],
      changementMethodePrixTransfert: [''],
      achatsDepenses:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      ventesRevenus: ['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
        ]
      ],


      natureOperationAutresOperation: [''],
      AutreMethodeDeterminationPrixTransfert: [''],
      AutreNatureOperation: [''],
      AutreNatureRelation: [''],
      AutreChangementMethodeDeterminationPrixTransfert: [''],
      AutreQualite: [''],
      
      
      
      
    });

    this.step10Form = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      qualiteEntreprise: [''],
      natureRelationEntreprise: [''],
      devise: [''],
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$') // Only alphanumeric characters
        ]],
      
     
      MouvementsAugmentations: ['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      MouvementsDiminutions:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      SoldeCloture:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      SoldeOuverture:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]], 
      TauxInterets: ['', [Validators.pattern(/^\d{1,4}(\.\d{1,2})?$/)]],
      PretsInterets: [this.defaultValue],
      AutreNatureRelation: [''],
      AutreQualite: [''],
      
      
    });

    this.step11Form = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      qualiteEntreprise: [''],
      natureRelationEntreprise: [''],
      devise: [''],
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')  
        ]],
      
      MouvementsAugmentations: ['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      MouvementsDiminutions:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      SoldeCloture:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      SoldeOuverture:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]], 
      TauxInterets: ['', [Validators.pattern(/^\d{1,4}(\.\d{1,2})?$/)]],
      empruntInterets: [this.defaultValueE],
      AutreNatureRelation: [''],
      AutreQualite: [''],
      
      
      
    });

    this.step11Form = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      qualiteEntreprise: [''],
      natureRelationEntreprise: [''],
     
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')  
        ]],
      
      MouvementsAugmentations: ['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      MouvementsDiminutions:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      SoldeCloture:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]],
      SoldeOuverture:['', [Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)]], 
      TauxInterets: ['', [Validators.pattern(/^\d{1,4}(\.\d{1,2})?$/)]],
      empruntInterets: [this.defaultValueE],
      AutreNatureRelation: [''],
      AutreQualite: [''],
      
      
      
    });

    this.step12Form = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      qualiteEntreprise: [''],
      natureRelationEntreprise: [''],
     
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')  
        ]],
      
      NatureContrepartie:[
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')  
        ]],
        NatureBiensOuService:[
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')  
        ]],
    
      affirmation: [this.defaultValueCNM],
      AutreNatureRelation: [''],
      AutreQualite: [''],
      
      
      
    });

    this.step13Form = this.formBuilder.group({
      Identifiant: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      MatriculeFiscal: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
        ]
      ],
 
      EtatTerritoire: [''],
      qualiteEntreprise: [''],
      natureOperation: [''],
      natureRelationEntreprise: [''],
     
      raisonSociale:  [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$')  
        ]],
        AutreNatureRelation: [''],
        AutreNatureOperation: [''],  
 
    
        affirmation: [this.defaultValueOAP],
     
      AutreQualite: [''],
      exerciceDebut: ['', [
        Validators.required,
        Validators.pattern(/^\d{4}$/),  
        Validators.min(1900),  
        Validators.max(9999) 
        
      ]],
   
      exerciceFin: ['', [
        Validators.required,
        Validators.pattern(/^\d{4}$/),  
        Validators.min(1900), 
        Validators.max(9999)  
      ]]
      
    });


  


  }
  get f(): { [key: string]: AbstractControl } {
    return this.stepFourForm.controls;
  }

  get f1(): { [key: string]: AbstractControl } {
    return this.step5Form.controls;
  }

  get f2(): { [key: string]: AbstractControl } {
    return this.step6Form.controls;
  }
  get f3(): { [key: string]: AbstractControl } {
    return this.step7Form.controls;
  }

  get f4(): { [key: string]: AbstractControl } {
    return this.step8Form.controls;
  }

  get f5(): { [key: string]: AbstractControl } {
    return this.step9Form.controls;
  }
  

  get f7(): { [key: string]: AbstractControl } {
    return this.step10Form.controls;
  }

  get f8(): { [key: string]: AbstractControl } {
    return this.step11Form.controls;
  }

  
  get f9(): { [key: string]: AbstractControl } {
    return this.step12Form.controls;
  }


  get f10(): { [key: string]: AbstractControl } {
    return this.step13Form.controls;
  }

  stepFourForm: FormGroup = new FormGroup({
  
    MatriculeFiscal: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
    ]),
    Identifiant: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    EtatTerritoire: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
    methodePrixTransfert: new FormControl(''),
    changementMethodePrixTransfert: new FormControl(''),
    raisonSociale: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    achatsDepenses: new FormControl('', [
      Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)
    ]),
    ventesRevenus: new FormControl('', [
      Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)
    ]),
    natureOperationValeurExploitation: new FormControl(''),
    identifiantEntreprise: new FormControl(''),
    AutreNatureOperation: new FormControl(''),
    AutreChangementMethodeDeterminationPrixTransfert: new FormControl(''),
    AutreMethodeDeterminationPrixTransfert: new FormControl(''),
    AutreQualite: new FormControl(''),
    AutreNatureRelation: new FormControl(''),
  });
  
 
  step5Form: FormGroup = new FormGroup({

    MatriculeFiscal: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
    ]),
    Identifiant: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    EtatTerritoire: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
    methodePrixTransfert: new FormControl(''),
    changementMethodePrixTransfert: new FormControl(''),
    raisonSociale: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    achatsDepenses: new FormControl('', [
      Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)
    ]),
    ventesRevenus: new FormControl('', [
      Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)
    ]),
    natureOperationRemunerationsBiens: new FormControl(''),
    identifiantEntreprise: new FormControl(''),
    AutreNatureOperation: new FormControl(''),
    AutreChangementMethodeDeterminationPrixTransfert: new FormControl(''),
    AutreMethodeDeterminationPrixTransfert: new FormControl(''),
    AutreQualite: new FormControl(''),
    AutreNatureRelation: new FormControl(''),
  });

  step6Form: FormGroup = new FormGroup({

    MatriculeFiscal: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
    ]),
    Identifiant: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    EtatTerritoire: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
    methodePrixTransfert: new FormControl(''),
    changementMethodePrixTransfert: new FormControl(''),
    raisonSociale: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    achatsDepenses: new FormControl('', [
      Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)
    ]),
    ventesRevenus: new FormControl('', [
      Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)
    ]),
    natureOperationFinanciere: new FormControl(''),
    identifiantEntreprise: new FormControl(''),
    AutreNatureOperation: new FormControl(''),
    AutreChangementMethodeDeterminationPrixTransfert: new FormControl(''),
    AutreMethodeDeterminationPrixTransfert: new FormControl(''),
    AutreQualite: new FormControl(''),
    AutreNatureRelation: new FormControl(''),
  });
  
  

  step7Form: FormGroup = new FormGroup({

     
    Identifiant: new FormControl(''),
    EtatTerritoire: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
    


  });

  step0Form: FormGroup = new FormGroup({

     
    Identifiant: new FormControl(''),
    EtatTerritoire: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
    


  });
  step8Form: FormGroup = new FormGroup({

    
    MatriculeFiscal: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
    ]),
    Identifiant: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    EtatTerritoire: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
    methodePrixTransfert: new FormControl(''),
    changementMethodePrixTransfert: new FormControl(''),
    raisonSociale: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    achatsDepenses: new FormControl('', [
      Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)
    ]),
    ventesRevenus: new FormControl('', [
      Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)
    ]),
    natureOperationCessionAcquisitionActif: new FormControl(''),
    identifiantEntreprise: new FormControl(''),
    AutreNatureOperation: new FormControl(''),
    AutreChangementMethodeDeterminationPrixTransfert: new FormControl(''),
    AutreMethodeDeterminationPrixTransfert: new FormControl(''),
    AutreQualite: new FormControl(''),
    AutreNatureRelation: new FormControl(''),
 
  


   

  });

  step9Form: FormGroup = new FormGroup({

    MatriculeFiscal: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
    ]),
    Identifiant: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    EtatTerritoire: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
    methodePrixTransfert: new FormControl(''),
    changementMethodePrixTransfert: new FormControl(''),
    raisonSociale: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    achatsDepenses: new FormControl('', [
      Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)
    ]),
    ventesRevenus: new FormControl('', [
      Validators.pattern(/^\d{1,16}(\.\d{1,3})?$/)
    ]),
    natureOperationAutresOperation: new FormControl(''),
    identifiantEntreprise: new FormControl(''),
    AutreNatureOperation: new FormControl(''),
    AutreChangementMethodeDeterminationPrixTransfert: new FormControl(''),
    AutreMethodeDeterminationPrixTransfert: new FormControl(''),
    AutreQualite: new FormControl(''),
    AutreNatureRelation: new FormControl(''),
 


  });

  step10Form: FormGroup = new FormGroup({

     
    MatriculeFiscal: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
    ]),
    Identifiant: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    EtatTerritoire: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
    Montant: new FormControl(''),
   
    raisonSociale: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
   
    devise: new FormControl(''),
    identifiantEntreprise: new FormControl(''),
    MouvementsAugmentations: new FormControl(''),
    MouvementsDiminutions: new FormControl(''),
    SoldeCloture: new FormControl(''),
    SoldeOuverture: new FormControl(''),
    TauxInterets: new FormControl(''),
    PretsInterets: new FormControl(''),
    AutreNatureRelation: new FormControl(''),
    AutreQualite: new FormControl(''),
 


    


  });

  step11Form: FormGroup = new FormGroup({

     
    MatriculeFiscal: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
    ]),
    Identifiant: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    EtatTerritoire: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
    
   
    raisonSociale: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
   
    devise: new FormControl(''),
    identifiantEntreprise: new FormControl(''),
    MouvementsAugmentations: new FormControl(''),
    MouvementsDiminutions: new FormControl(''),
    SoldeCloture: new FormControl(''),
    SoldeOuverture: new FormControl(''),
    empruntInterets: new FormControl(''),
    AutreNatureRelation: new FormControl(''),
    AutreQualite: new FormControl(''),
    


  });

  step12Form: FormGroup = new FormGroup({

     
    MatriculeFiscal: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
    ]),
    Identifiant: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    EtatTerritoire: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
  
   
    raisonSociale: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    
    identifiantEntreprise: new FormControl(''),
    affirmation: new FormControl(''),
    NatureBiensOuService: new FormControl(''),
    NatureContrepartie: new FormControl(''),
    AutreNatureRelation: new FormControl(''),
    AutreQualite: new FormControl(''),
    


  });

  step13Form: FormGroup = new FormGroup({

     
    MatriculeFiscal: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9]{7}[ABCDEFGHJKLMNPQRSTVWXYZ]')
    ]),
    Identifiant: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    EtatTerritoire: new FormControl(''),
    qualiteEntreprise: new FormControl(''),
    natureRelationEntreprise: new FormControl(''),
  
   
    raisonSociale: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    
    identifiantEntreprise: new FormControl(''),
    affirmation: new FormControl(''),
    natureOperation: new FormControl(''),
    exerciceDebut: new FormControl(''),
    exerciceFin: new FormControl(''),
    AutreNatureRelation: new FormControl(''),
    AutreQualite: new FormControl(''),
    AutreNatureOperation: new FormControl(''),


  });

 


  currentForm = 1;


  goToNextForm() {
    this.currentForm++;
    this.stepFourSubmit()

  }

  goToNextForm2() {
    this.currentForm++;
    this.step5Submit()

  }

  goToNextForm3() {
    this.currentForm++;
    this.step6Submit()

  }

  goToNextForm4() {
    this.currentForm++;
    this.step7Submit()

  }

  goToNextForm5() {
    this.currentForm++;
    this.step8Submit()

  }

 
  goToNextForm6() {
    this.currentForm++;
    this.step9Submit()

  }

  goToNextForm7() {
    this.currentForm++;
    this.step10Submit()

  }

  goToNextForm8() {
    this.currentForm++;
    this.step11Submit()

  }

  goToNextForm9() {
    this.currentForm++;
    this.step12Submit()

  }


  goToNextForm10() {
   
    this.step13Submit()

  }
  
  
  goToNextForm0() {
    this.currentForm++;
    this.step0Submit()

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



  selectedNatureRemuneration: string; // Variable to hold the selected value

natureRemunerationOptions = [
  { value: '1', viewValue: 'Loyers' },
  { value: '2', viewValue: 'Redevances' },
  { value: '3', viewValue: 'Rémunérations de franchise' },
  { value: 'AutreNatureOperation', viewValue: 'Autre nature' }  
];


onNatureOperationChangeRB(event: any) {
  this.selectedNatureRemuneration = event.value;
}






selectedServive: string; 

natureServiceOptions = [
  { value: '1', viewValue: 'Gestion/Administration' },
  { value: '2', viewValue: 'Services techniques et rémunérations du travail intellectuel' },
  { value: '3', viewValue: 'Recherche et développement' },
  { value: '4', viewValue: 'Formation' },
  { value: '5', viewValue: 'Commissions' },
  { value: 'AutreNatureOperation', viewValue: 'Autre Nature Valeur Exploitation' }
];


onNatureOperationChangeService(event: any) {
  this.selectedServive = event.value;
}





selectedFinanciere: string; // Variable to hold the selected value

natureFinanciereOptions = [
    { value: '1', viewValue: 'Intérêts' },
    { value: '2', viewValue: 'Frais de garantie et de caution' },
    { value: '3', viewValue: 'Leasing' },
    { value: '4', viewValue: 'Assurance' },
    { value: 'AutreNatureOperation', viewValue: 'Autre nature' } 
];


onNatureOperationChangeFinanciere(event: any) {
  this.selectedFinanciere = event.value;
}







selectedCessionAcquisitionActif: string;  

natureCessionAcquisitionActifOptions = [
  { value: '1', viewValue: 'Brevets' },
  { value: '2', viewValue: 'Marques' },
  { value: '3', viewValue: 'Fonds de commerce' },
  { value: '4', viewValue: 'Autres actifs incorporels' },
  { value: '5', viewValue: 'Actifs corporels' },
  { value: '6', viewValue: 'Biens immeubles' },
  { value: 'AutreNatureOperation', viewValue: 'Autre nature' } 
];

onNatureOperationChangeCessionAcquisitionActif(event: any) {
  this.selectedCessionAcquisitionActif = event.value;
}











 

natureAutreOperation = [
  { value: '1', viewValue: 'Remboursements de frais' },
  { value: '2', viewValue: 'Coûts supportés pour la mise à disposition de personnel du groupe' }
];


 


  selectedQualiteRB: string;
  
  qualiteOptionsRB = [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangeRB(event: any) {
    this.selectedQualiteRB = event.value;
  }


  selectedQualiteService: string;
  
  qualiteOptionsService = [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangeService(event: any) {
    this.selectedQualiteService = event.value;
  }





  selectedQualiteFinanciere: string;
  
  qualiteOptionsFinanciere = [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangeFinanciere(event: any) {
    this.selectedQualiteFinanciere = event.value;
  }







  selectedQualiteCessionAcquisitionActif: string;
  
  qualiteOptionsCessionAcquisitionActif = [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangeCessionAcquisitionActif(event: any) {
    this.selectedQualiteCessionAcquisitionActif = event.value;
  }















  selectedQualiteAutreOperation: string;
  
  qualiteOptionsAutreOperation= [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangeAutreOperation(event: any) {
    this.selectedQualiteAutreOperation = event.value;
  }









  selectedQualitePretAccorde: string;
  
  qualiteOptionsPretAccorde= [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangePretAccorde(event: any) {
    this.selectedQualitePretAccorde = event.value;
  }




  selectedQualiteEmpruntContracte: string;
  
  qualiteOptionsEmpruntContracte= [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangeEmpruntContracte(event: any) {
    this.selectedQualiteEmpruntContracte = event.value;
  }



  selectedQualiteContrepartieNonMonetaire: string;
  
  qualiteOptionsContrepartieNonMonetaire= [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangeContrepartieNonMonetaire(event: any) {
    this.selectedQualiteContrepartieNonMonetaire = event.value;
  }

  selectedQualiteOperationsAccordsPrealables: string;
  
  qualiteOptionsOperationsAccordsPrealables= [
    { value: '1', viewValue: 'Entité mère ultime' },
    { value: '2', viewValue: 'Entité mère non ultime' },
    { value: '3', viewValue: 'Entreprise holding' },
    { value: '4', viewValue: 'Entreprise filiale' },
    { value: '5', viewValue: 'Établissement stable' },
    { value: 'AutreQualite', viewValue: 'Autre Qualité' }
  ];
  onQualiteChangeOperationsAccordsPrealables(event: any) {
    this.selectedQualiteOperationsAccordsPrealables = event.value;
  }


  selectedMethode: string;
  
  methodeOptions = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];
  onMethodeChange(event: any) {
    this.selectedMethode = event.value;
  }



  selectedMethodeRB: string;
  
  methodeOptionsRB = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];
  onMethodeChangeRB(event: any) {
    this.selectedMethodeRB = event.value;
  }








  selectedMethodeService: string;
  
  methodeOptionsService = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];
  onMethodeChangeService(event: any) {
    this.selectedMethodeService = event.value;
  }






  selectedMethodeFinanciere: string;
  
  methodeOptionsFinanciere = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];
  onMethodeChangeFinanciere(event: any) {
    this.selectedMethodeFinanciere = event.value;
  }









  selectedMethodeCessionAcquisitionActif: string;
  
  methodeOptionsCessionAcquisitionActif = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];
  onMethodeChangeCessionAcquisitionActif(event: any) {
    this.selectedMethodeCessionAcquisitionActif = event.value;
  }






  selectedMethodeAutreOperation: string;
  
  methodeOptionsAutreOperation = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];
  onMethodeChangeCAutreOperation(event: any) {
    this.selectedMethodeAutreOperation = event.value;
  } 

  selectedChangementMethodePrixTransfert: string;

  methodePrixTransfertOptions = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreChangementMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];

  onChangementMethodeChange(event: any) {
    this.selectedChangementMethodePrixTransfert = event.value;
  }








  selectedChangementMethodePrixTransfertRB: string;

  methodePrixTransfertOptionsRB = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreChangementMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];

  onChangementMethodeChangeRB(event: any) {
    this.selectedChangementMethodePrixTransfertRB = event.value;
  }









  selectedChangementMethodePrixTransfertService: string;

  methodePrixTransfertOptionsService = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreChangementMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];

  onChangementMethodeChangeService(event: any) {
    this.selectedChangementMethodePrixTransfertService = event.value;
  }








  selectedChangementMethodePrixTransfertFinanciere: string;

  methodePrixTransfertOptionsFinanciere = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreChangementMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];

  onChangementMethodeChangeFinanciere(event: any) {
    this.selectedChangementMethodePrixTransfertFinanciere = event.value;
  }











  selectedChangementMethodePrixTransfertCessionAcquisitionActif: string;

  methodePrixTransfertOptionsCessionAcquisitionActif = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreChangementMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];

  onChangementMethodeChangeCessionAcquisitionActif(event: any) {
    this.selectedChangementMethodePrixTransfertCessionAcquisitionActif = event.value;
  }









  selectedChangementMethodePrixTransfertAutreOperation: string;

  methodePrixTransfertOptionsAutreOperation = [
    { value: 'CUP', viewValue: 'Méthode du prix comparable sur le marché libre' },
    { value: 'MPR', viewValue: 'Méthode du prix de revente' },
    { value: 'MPRM', viewValue: 'Méthode du prix de revient majoré' },
    { value: 'MTMN', viewValue: 'Méthode transactionnelle de la marge nette' },
    { value: 'MPB', viewValue: 'Méthode du partage des bénéfices' },
    { value: 'AutreChangementMethodeDeterminationPrixTransfert', viewValue: 'Autre Méthode' }
  ];

  onChangementMethodeChangeAutreOperation(event: any) {
    this.selectedChangementMethodePrixTransfertAutreOperation = event.value;
  }

  selectedNatureNRVE: string;
  isAutreSelectedNRVE: boolean;
  natureOptionsNRVE = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutreNatureRelation', viewValue: 'Autre Nature Relation' }
  ];
  onNatureChangeNRVE(event: any) {
    this.selectedNatureNRVE = event.value;
    this.isAutreSelectedNRVE = this.selectedNatureNRVE === 'AutreNatureRelation';
    
  }



  selectednatureRelationEntrepriseRB: string;
  isAutreSelectednatureRelationEntrepriseRB: boolean;
  OptionsnatureRelationEntrepriseRB = [
    { value: '1', viewValue: 'Propriétaires' },
    { value: '2', viewValue: 'Copropriétaires' },
    { value: '3', viewValue: 'Locataires' },
    { value: '4', viewValue: 'Concessionnaires' },
    { value: 'AutrenatureRelationEntreprise', viewValue: 'Autre Nature Relation' }
  ];
  onNatureChangenatureRelationEntrepriseRB(event: any) {
    this.selectednatureRelationEntrepriseRB= event.value;
    this.isAutreSelectednatureRelationEntrepriseRB = this.selectednatureRelationEntrepriseRB === 'AutrenatureRelationEntreprise';
  }
  
 

  selectedOptionVExploitation: string = 'MatriculeFiscal';  
  
  onOptionChangeVExploitation(event: any) {
    
      this.selectedOptionVExploitation= event.value;
    }

    
    selectedOptionRBiens: string = 'MatriculeFiscal';  
  
  onOptionChangeRBiens(event: any) {
      this.selectedOptionRBiens= event.value;
    }

 
    selectedOptionS: string = 'MatriculeFiscal';  
  
    onOptionChangeService(event: any) {
        this.selectedOptionS= event.value;
      }
  
 
      selectedOptionF: string = 'MatriculeFiscal';  
  
      onOptionChangeFinanciere(event: any) {
          this.selectedOptionF= event.value;
        }
    

        
      selectedOptionC: string = 'MatriculeFiscal';  
  
      onOptionChangeCessionAcquisitionActif(event: any) {
          this.selectedOptionC= event.value;
        }









        selectedOptionA: string = 'MatriculeFiscal';  
  
        onOptionChangeCessionAutreOperation(event: any) {
            this.selectedOptionA= event.value;
          }



          
        selectedOptionP: string = 'MatriculeFiscal';  
  
        onOptionChangePretAccorde(event: any) {
            this.selectedOptionP= event.value;
          }




          selectedOptionE: string = 'MatriculeFiscal';  
  
          onOptionChangeEmpruntContracte(event: any) {
              this.selectedOptionE= event.value;
            }

            selectedOptionCNM: string = 'MatriculeFiscal';  
  
            onOptionChangeContrepartieNonMonetaire(event: any) {
                this.selectedOptionCNM= event.value;
              }

              selectedOptionOAP: string = 'MatriculeFiscal';  
  
              onOptionChangeOperationsAccordsPrealables(event: any) {
                  this.selectedOptionOAP= event.value;
                }
  isAutreSelected: boolean = false;

 
onSelectionChange(event: any) {
  this.isAutreSelected = event.value === 'Autre';
}
  
 
selectedOption2: string = '';
isAutreSelected2: boolean = false;
 
onnatureRelationEntrepriseChange(event: any) {
this.isAutreSelected2 = event.value === 'autre2';
}















 



showInput2: boolean = false;
onCheckboxChangeMethodeDetermination(event: any) {
  if (event.source.value === 'AutreMethode') {
    this.showInput2 = event.checked;
  }
}
 
showInput3: boolean = false;
onCheckboxChange3(event: any) {
  if (event.source.value === 'AutreMethode') {
    this.showInput3 = event.checked;
  }
}
 



 
declarationId: number; 
submitted = false;
identifiantEntrepriseVE : any
jsonObject: any = {}; // Initialize jsonObject as an empty object

stepFourSubmit(): void {
  const idDeclaration = this.shared.getData(); 
  this.submitted = true;

  if (this.selectedNatureVE === "AutreNatureValeurExploitation"){
    this.jsonObject.AutreNatureValeurExploitation = this.stepFourForm.get('AutreNatureOperation').value;
  }

  if (this.selectedNatureNRVE === "AutreNatureRelation"){
    this.jsonObject.AutreNatureRelation = this.stepFourForm.get('AutreNatureRelation').value;
  }

  if (this.selectedQualite === "AutreQualite"){
    this.jsonObject.AutreQualite = this.stepFourForm.get('AutreQualite').value;
  }

  if (this.selectedMethode === "AutreMethodeDeterminationPrixTransfert"){
    this.jsonObject.AutreMethodeDeterminationPrixTransfert = this.stepFourForm.get('AutreMethodeDeterminationPrixTransfert').value;
  }

  if (this.selectedChangementMethodePrixTransfert === "AutreChangementMethodeDeterminationPrixTransfert"){
    this.jsonObject.AutreChangementMethodeDeterminationPrixTransfert = this.stepFourForm.get('AutreChangementMethodeDeterminationPrixTransfert').value;
  }

  console.log('Form Data:', this.stepFourForm.value);
  console.log('Additional JSON Object:', this.jsonObject);

  let identifiantEntrepriseVEValue: any;
  if (this.selectedOptionVExploitation === "MatriculeFiscal") {
    identifiantEntrepriseVEValue = { MatriculeFiscal: this.stepFourForm.get('MatriculeFiscal')?.value };
  } else if (this.selectedOptionVExploitation === "Identifiant") {
    identifiantEntrepriseVEValue = { Identifiant: this.stepFourForm.get('Identifiant')?.value };
  } else if (this.selectedOptionVExploitation === "EtatTerritoire") {
    identifiantEntrepriseVEValue = { EtatTerritoire: this.stepFourForm.get('EtatTerritoire')?.value };
  }

  const newValeurExploitation: ValeurExploitation = {
    identifiantEntreprise: JSON.stringify(identifiantEntrepriseVEValue),
    raisonSociale: this.stepFourForm.get('raisonSociale')?.value,
    qualiteEntreprise: (this.stepFourForm.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.stepFourForm.get('qualiteEntreprise')?.value,
    achatsDepenses: this.stepFourForm.get('achatsDepenses')?.value,
    ventesRevenus: this.stepFourForm.get('ventesRevenus')?.value,
    natureOperationValeurExploitation: (this.stepFourForm.get('natureOperationValeurExploitation')?.value === 'AutreNatureValeurExploitation') ? JSON.stringify(this.jsonObject) : this.stepFourForm.get('natureOperationValeurExploitation')?.value,
    natureRelationEntreprise:(this.stepFourForm.get('natureRelationEntreprise')?.value === 'AutreNatureRelation') ? JSON.stringify(this.jsonObject) : this.stepFourForm.get('natureRelationEntreprise')?.value,
    methodePrixTransfert: (this.stepFourForm.get('methodePrixTransfert')?.value === 'AutreMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.stepFourForm.get('methodePrixTransfert')?.value,
    changementMethodePrixTransfert: (this.stepFourForm.get('changementMethodePrixTransfert')?.value === 'AutreChangementMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.stepFourForm.get('changementMethodePrixTransfert')?.value,
  };

  this.ValeurExploitationService.createValeurExploitation(newValeurExploitation, idDeclaration).subscribe(
    data => {
      console.log('ValeurExploitation created:', data);
      this.resetForm();
    },
    error => {
      console.error('Error creating ValeurExploitation:', error);
    }
  );
}

resetForm(): void {
  // Reset form fields and set submitted to false
  this.submitted = false;
  this.stepFourForm.reset();
}


identifiantEntrepriseRB : any
submitted5 = false;
step5Submit(): void {
  const idDeclaration = this.shared.getData(); 
  this.submitted5 = true;
  if (this.selectedNatureRemuneration === "AutreNatureOperation"){
      

      
    this.jsonObject = {
      AutreNatureOperation: this.step5Form.get('AutreNatureOperation').value
  }
  
}



if (this.selectedNatureRB === "AutreNatureRelation"){
      

      
  this.jsonObject = {
    AutreNatureRelation: this.step5Form.get('AutreNatureRelation').value
}

}



 


if (this.selectedQualiteRB === "AutreQualite"){
    

    
  this.jsonObject = {
    AutreQualite: this.step5Form.get('AutreQualite').value
}}



if (this.selectedMethodeRB === "AutreMethodeDeterminationPrixTransfert"){
    

    
  this.jsonObject = {
    AutreMethodeDeterminationPrixTransfert: this.step5Form.get('AutreMethodeDeterminationPrixTransfert').value
}}


if (this.selectedChangementMethodePrixTransfertRB === "AutreChangementMethodeDeterminationPrixTransfert"){
    

    
  this.jsonObject = {
    AutreChangementMethodeDeterminationPrixTransfert: this.step5Form.get('AutreChangementMethodeDeterminationPrixTransfert').value
}}

  let identifiantEntrepriseRBValue: any;
  if (this.selectedOptionRBiens === "MatriculeFiscal") {
    identifiantEntrepriseRBValue = { MatriculeFiscal: this.step5Form.get('MatriculeFiscal')?.value };
  } else if (this.selectedOptionRBiens === "Identifiant") {
    identifiantEntrepriseRBValue = { Identifiant: this.step5Form.get('Identifiant')?.value };
  } else if (this.selectedOptionRBiens === "EtatTerritoire") {
    identifiantEntrepriseRBValue = { EtatTerritoire: this.step5Form.get('EtatTerritoire')?.value };
  }

  console.log(identifiantEntrepriseRBValue);

  const newRemunerationsBiens: RemunerationsBiens = {
    identifiantEntreprise: JSON.stringify(identifiantEntrepriseRBValue),
    raisonSociale: this.step5Form.get('raisonSociale')?.value,
    qualiteEntreprise: (this.step5Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step5Form.get('qualiteEntreprise')?.value,
    achatsDepenses: this.step5Form.get('achatsDepenses')?.value,
    ventesRevenus: this.step5Form.get('ventesRevenus')?.value,
    natureOperationRemunerationsBiens: (this.step5Form.get('natureOperationRemunerationsBiens')?.value === 'AutreNatureOperation') ? JSON.stringify(this.jsonObject) : this.step5Form.get('natureOperationRemunerationsBiens')?.value,
    natureRelationEntreprise:(this.step5Form.get('natureRelationEntreprise')?.value === 'AutreNatureRelation') ? JSON.stringify(this.jsonObject) : this.step5Form.get('natureRelationEntreprise')?.value,
    methodePrixTransfert: (this.step5Form.get('methodePrixTransfert')?.value === 'AutreMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.step5Form.get('methodePrixTransfert')?.value,
    changementMethodePrixTransfert: (this.step5Form.get('changementMethodePrixTransfert')?.value === 'AutreChangementMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.step5Form.get('changementMethodePrixTransfert')?.value,
  };
 

  this.RemunerationsBiensService.createRemunerationsBiens(newRemunerationsBiens, idDeclaration).subscribe(
    data => {
      console.log('RemunerationsBiens created:', data);
      // Reset the form after successfully submitting
      this.resetForm5();
    },
    error => {
      console.error('Error creating RemunerationsBiens:', error);
      // Optionally handle errors here
    }
  );
}

resetForm5(): void {
  // Reset form fields and set submitted to false
  this.submitted5 = false;
  this.step5Form.reset();
}
 





identifiantEntrepriseService : any
submitted6 = false;
step6Submit(): void {
  const idDeclaration = this.shared.getData(); 
  this.submitted6 = true;

  if (this.selectedServive === "AutreNatureOperation"){
      

      
    this.jsonObject = {
      AutreNatureOperation: this.step6Form.get('AutreNatureOperation').value
  }
  
}



if (this.selectedNatureService === "AutreNatureRelation"){
      

      
  this.jsonObject = {
    AutreNatureRelation: this.step6Form.get('AutreNatureRelation').value
}

}



 


if (this.selectedQualiteService === "AutreQualite"){
    

    
  this.jsonObject = {
    AutreQualite: this.step6Form.get('AutreQualite').value
}}



if (this.selectedMethodeService === "AutreMethodeDeterminationPrixTransfert"){
    

    
  this.jsonObject = {
    AutreMethodeDeterminationPrixTransfert: this.step6Form.get('AutreMethodeDeterminationPrixTransfert').value
}}


if (this.selectedChangementMethodePrixTransfertService === "AutreChangementMethodeDeterminationPrixTransfert"){
    

    
  this.jsonObject = {
    AutreChangementMethodeDeterminationPrixTransfert: this.step6Form.get('AutreChangementMethodeDeterminationPrixTransfert').value
}}


  let identifiantEntrepriseServiceValue: any;
  if (this.selectedOptionS === "MatriculeFiscal") {
    identifiantEntrepriseServiceValue = { MatriculeFiscal: this.step6Form.get('MatriculeFiscal')?.value };
  } else if (this.selectedOptionS === "Identifiant") {
    identifiantEntrepriseServiceValue = { Identifiant: this.step6Form.get('Identifiant')?.value };
  } else if (this.selectedOptionS === "EtatTerritoire") {
    identifiantEntrepriseServiceValue = { EtatTerritoire: this.step6Form.get('EtatTerritoire')?.value };
  }

  console.log(identifiantEntrepriseServiceValue);

  const newService: Service = {
    identifiantEntreprise: JSON.stringify(identifiantEntrepriseServiceValue),
    raisonSociale: this.step6Form.get('raisonSociale')?.value,
    qualiteEntreprise: (this.step6Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step6Form.get('qualiteEntreprise')?.value,
    achatsDepenses: this.step6Form.get('achatsDepenses')?.value,
    ventesRevenus: this.step6Form.get('ventesRevenus')?.value,
    natureOperationService:  (this.step6Form.get('natureOperationService')?.value === 'AutreNatureOperation') ? JSON.stringify(this.jsonObject) : this.step6Form.get('natureOperationService')?.value,
    natureRelationEntreprise:(this.step6Form.get('natureRelationEntreprise')?.value === 'AutreNatureRelation') ? JSON.stringify(this.jsonObject) : this.step6Form.get('natureRelationEntreprise')?.value,
    methodePrixTransfert: (this.step6Form.get('methodePrixTransfert')?.value === 'AutreMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.step6Form.get('methodePrixTransfert')?.value,
    changementMethodePrixTransfert: (this.step6Form.get('changementMethodePrixTransfert')?.value === 'AutreChangementMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.step6Form.get('changementMethodePrixTransfert')?.value,
  };

  this.ServiceService.createService(newService, idDeclaration).subscribe(
    data => {
      console.log('Service created:', data);
      // Reset the form after successfully submitting
      this.resetForm6();
    },
    error => {
      console.error('Error creating Service:', error);
      // Optionally handle errors here
    }
  );
}

resetForm6(): void {
  // Reset form fields and set submitted to false
  this.submitted6 = false;
  this.step6Form.reset();
}











identifiantEntrepriseFinanciere : any
submitted7= false;
step7Submit(): void {
  const idDeclaration = this.shared.getData(); 
  this.submitted7 = true;

  if (this.selectedFinanciere === "AutreNatureOperation"){
      

      
    this.jsonObject = {
      AutreNatureOperation: this.step7Form.get('AutreNatureOperation').value
  }
  
}



if (this.selectedNatureFinanciere === "AutreNatureRelation"){
      

      
  this.jsonObject = {
    AutreNatureRelation: this.step7Form.get('AutreNatureRelation').value
}

}



 


if (this.selectedQualiteFinanciere === "AutreQualite"){
    

    
  this.jsonObject = {
    AutreQualite: this.step7Form.get('AutreQualite').value
}}



if (this.selectedMethodeFinanciere === "AutreMethodeDeterminationPrixTransfert"){
    

    
  this.jsonObject = {
    AutreMethodeDeterminationPrixTransfert: this.step7Form.get('AutreMethodeDeterminationPrixTransfert').value
}}


if (this.selectedChangementMethodePrixTransfertFinanciere === "AutreChangementMethodeDeterminationPrixTransfert"){
    

    
  this.jsonObject = {
    AutreChangementMethodeDeterminationPrixTransfert: this.step7Form.get('AutreChangementMethodeDeterminationPrixTransfert').value
}}


  let identifiantEntrepriseFinanciereValue: any;
  if (this.selectedOptionF === "MatriculeFiscal") {
    identifiantEntrepriseFinanciereValue = { MatriculeFiscal: this.step7Form.get('MatriculeFiscal')?.value };
  } else if (this.selectedOptionF === "Identifiant") {
    identifiantEntrepriseFinanciereValue = { Identifiant: this.step7Form.get('Identifiant')?.value };
  } else if (this.selectedOptionF === "EtatTerritoire") {
    identifiantEntrepriseFinanciereValue = { EtatTerritoire: this.step7Form.get('EtatTerritoire')?.value };
  }

  console.log(identifiantEntrepriseFinanciereValue);

  const newFinanciere: Financiere = {
    identifiantEntreprise: JSON.stringify(identifiantEntrepriseFinanciereValue),
    raisonSociale: this.step7Form.get('raisonSociale')?.value,
    qualiteEntreprise: (this.step7Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step7Form.get('qualiteEntreprise')?.value,
    achatsDepenses: this.step7Form.get('achatsDepenses')?.value,
    ventesRevenus: this.step7Form.get('ventesRevenus')?.value,
    natureOperationFinanciere: (this.step7Form.get('natureOperationService')?.value === 'AutreNatureOperation') ? JSON.stringify(this.jsonObject) : this.step7Form.get('natureOperationService')?.value,
    natureRelationEntreprise:(this.step7Form.get('natureRelationEntreprise')?.value === 'AutreNatureRelation') ? JSON.stringify(this.jsonObject) : this.step7Form.get('natureRelationEntreprise')?.value,
    methodePrixTransfert: (this.step7Form.get('methodePrixTransfert')?.value === 'AutreMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.step7Form.get('methodePrixTransfert')?.value,
    changementMethodePrixTransfert: (this.step7Form.get('changementMethodePrixTransfert')?.value === 'AutreChangementMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.step7Form.get('changementMethodePrixTransfert')?.value,
  };
  

  this.FinanciereService.createFinanciere(newFinanciere, idDeclaration).subscribe(
    data => {
      console.log('Service created:', data);
  
      this.resetForm7();
    },
    error => {
      console.error('Error creating Service:', error);
    
    }
  );
}

resetForm7(): void {
   
  this.submitted7 = false;
  this.step7Form.reset();
}
 

















 
submitted0= false;
step0Submit(): void {
  const idDeclaration = this.shared.getData(); 
  this.submitted0 = true;

if (this.step0Form.invalid) {

return;
}

 
const newDescriptionTransactionsRegimeFiscalPrivilegie: DescriptionTransactionsRegimeFiscalPrivilegie  = {
 
description: this.step0Form.get('description')?.value,
declaration: this.declarationId  

};

 
this.DescriptionTransactionsRegimeFiscalPrivilegieService.createDescriptionTransactionsRegimeFiscalPrivilegie(newDescriptionTransactionsRegimeFiscalPrivilegie, idDeclaration).subscribe(
data => {
  console.log('DescriptionTransactionsRegimeFiscalPrivilegie created:', data);
  


},
error => {
  console.error('Error creating DescriptionTransactionsRegimeFiscalPrivilegie :', error);
}
);
}


















identifiantEntrepriseCessionAcquisitionActif : any
submitted8= false;
step8Submit(): void {
  const idDeclaration = this.shared.getData(); 
  this.submitted8 = true;

  if (this.selectedCessionAcquisitionActif === "AutreNatureOperation"){
      

      
    this.jsonObject = {
      AutreNatureOperation: this.step8Form.get('AutreNatureOperation').value
  }
  
}



if (this.selectedNatureCessionAcquisitionActif === "AutreNatureRelation"){
      

      
  this.jsonObject = {
    AutreNatureRelation: this.step8Form.get('AutreNatureRelation').value
}

}



 


if (this.selectedQualiteCessionAcquisitionActif === "AutreQualite"){
    

    
  this.jsonObject = {
    AutreQualite: this.step8Form.get('AutreQualite').value
}}



if (this.selectedMethodeCessionAcquisitionActif === "AutreMethodeDeterminationPrixTransfert"){
    

    
  this.jsonObject = {
    AutreMethodeDeterminationPrixTransfert: this.step8Form.get('AutreMethodeDeterminationPrixTransfert').value
}}


if (this.selectedChangementMethodePrixTransfertCessionAcquisitionActif === "AutreChangementMethodeDeterminationPrixTransfert"){
    

    
  this.jsonObject = {
    AutreChangementMethodeDeterminationPrixTransfert: this.step7Form.get('AutreChangementMethodeDeterminationPrixTransfert').value
}}
  let identifiantEntrepriseCessionAcquisitionActifValue: any;
  if (this.selectedOptionC === "MatriculeFiscal") {
    identifiantEntrepriseCessionAcquisitionActifValue = { MatriculeFiscal: this.step7Form.get('MatriculeFiscal')?.value };
  } else if (this.selectedOptionC === "Identifiant") {
    identifiantEntrepriseCessionAcquisitionActifValue = { Identifiant: this.step7Form.get('Identifiant')?.value };
  } else if (this.selectedOptionC === "EtatTerritoire") {
    identifiantEntrepriseCessionAcquisitionActifValue = { EtatTerritoire: this.step7Form.get('EtatTerritoire')?.value };
  }

  console.log(identifiantEntrepriseCessionAcquisitionActifValue);

  const newCessionAcquisitionActif: CessionAcquisitionActif = {
    identifiantEntreprise: JSON.stringify(identifiantEntrepriseCessionAcquisitionActifValue),
    raisonSociale: this.step8Form.get('raisonSociale')?.value,
    qualiteEntreprise: (this.step8Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step8Form.get('qualiteEntreprise')?.value,
    achatsDepenses: this.step8Form.get('achatsDepenses')?.value,
    ventesRevenus: this.step8Form.get('ventesRevenus')?.value,
    natureOperationCessionAcquisitionActif:(this.step8Form.get('natureOperationCessionAcquisitionActif')?.value === 'AutreNatureOperation') ? JSON.stringify(this.jsonObject) : this.step8Form.get('natureOperationCessionAcquisitionActif')?.value,
    natureRelationEntreprise:(this.step8Form.get('natureRelationEntreprise')?.value === 'AutreNatureRelation') ? JSON.stringify(this.jsonObject) : this.step8Form.get('natureRelationEntreprise')?.value,
    methodePrixTransfert: (this.step8Form.get('methodePrixTransfert')?.value === 'AutreMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.step8Form.get('methodePrixTransfert')?.value,
    changementMethodePrixTransfert: (this.step8Form.get('changementMethodePrixTransfert')?.value === 'AutreChangementMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.step8Form.get('changementMethodePrixTransfert')?.value,
  };
  

  this.CessionAcquisitionActifService.createCessionAcquisitionActif(newCessionAcquisitionActif, idDeclaration).subscribe(
    data => {
      console.log('CessionAcquisitionActif created:', data);
      // Reset the form after successfully submitting
      this.resetForm8();
    },
    error => {
      console.error('Error creating CessionAcquisitionActif :', error);
      // Optionally handle errors here
    }
  );
}

resetForm8(): void {
  // Reset form fields and set submitted to false
  this.submitted8 = false;
  this.step8Form.reset();
}













identifiantEntrepriseAutreOperation : any
submitted9= false;
step9Submit(): void {
  const idDeclaration = this.shared.getData(); 
  this.submitted9 = true;

 



if (this.selectedNatureAutreOperation === "AutreNatureRelation"){
      

      
  this.jsonObject = {
    AutreNatureRelation: this.step9Form.get('AutreNatureRelation').value
}

}



 


if (this.selectedQualiteAutreOperation === "AutreQualite"){
    

    
  this.jsonObject = {
    AutreQualite: this.step9Form.get('AutreQualite').value
}}



if (this.selectedMethodeAutreOperation === "AutreMethodeDeterminationPrixTransfert"){
    

    
  this.jsonObject = {
    AutreMethodeDeterminationPrixTransfert: this.step9Form.get('AutreMethodeDeterminationPrixTransfert').value
}}


if (this.selectedChangementMethodePrixTransfertAutreOperation === "AutreChangementMethodeDeterminationPrixTransfert"){
    

    
  this.jsonObject = {
    AutreChangementMethodeDeterminationPrixTransfert: this.step9Form.get('AutreChangementMethodeDeterminationPrixTransfert').value
}}

  let identifiantEntrepriseAutreOperationValue: any;
  if (this.selectedOptionA === "MatriculeFiscal") {
    identifiantEntrepriseAutreOperationValue = { MatriculeFiscal: this.step9Form.get('MatriculeFiscal')?.value };
  } else if (this.selectedOptionA === "Identifiant") {
    identifiantEntrepriseAutreOperationValue = { Identifiant: this.step9Form.get('Identifiant')?.value };
  } else if (this.selectedOptionA === "EtatTerritoire") {
    identifiantEntrepriseAutreOperationValue = { EtatTerritoire: this.step9Form.get('EtatTerritoire')?.value };
  }

  console.log(identifiantEntrepriseAutreOperationValue);

  const newAutreOperation: AutreOperation  = {
    identifiantEntreprise: JSON.stringify(identifiantEntrepriseAutreOperationValue),
    raisonSociale: this.step9Form.get('raisonSociale')?.value,
    qualiteEntreprise: (this.step9Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step9Form.get('qualiteEntreprise')?.value,
    achatsDepenses: this.step9Form.get('achatsDepenses')?.value,
    ventesRevenus: this.step9Form.get('ventesRevenus')?.value,
    natureOperationAutresOperation: this.step9Form.get('natureOperationAutresOperation')?.value,
    natureRelationEntreprise:(this.step9Form.get('natureRelationEntreprise')?.value === 'AutreNatureRelation') ? JSON.stringify(this.jsonObject) : this.step9Form.get('natureRelationEntreprise')?.value,
    methodePrixTransfert: (this.step9Form.get('methodePrixTransfert')?.value === 'AutreMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.step9Form.get('methodePrixTransfert')?.value,
    changementMethodePrixTransfert: (this.step9Form.get('changementMethodePrixTransfert')?.value === 'AutreChangementMethodeDeterminationPrixTransfert') ? JSON.stringify(this.jsonObject) : this.step9Form.get('changementMethodePrixTransfert')?.value,
  };
  
 

  this.AutreOperationService.createAutreOperation(newAutreOperation, idDeclaration).subscribe(
    data => {
      console.log('CessionAcquisitionActif created:', data);
      // Reset the form after successfully submitting
      this.resetForm9();
    },
    error => {
      console.error('Error creating CessionAcquisitionActif :', error);
      // Optionally handle errors here
    }
  );
}

resetForm9(): void {
  // Reset form fields and set submitted to false
  this.submitted9 = false;
  this.step9Form.reset();
}
 




















identifiantEntreprisePretAccorde : any
submitted10= false;
step10Submit(): void {
  const idDeclaration = this.shared.getData(); 
  this.submitted10 = true;


  if (this.selectedNaturePretAccorde === "AutreNatureRelation"){
      

      
    this.jsonObject = {
      AutreNatureRelation: this.step10Form.get('AutreNatureRelation').value
  }
  
  }

  if (this.selectedQualitePretAccorde === "AutreQualite"){
    

    
    this.jsonObject = {
      AutreQualite: this.step10Form.get('AutreQualite').value
  }}
  

  let identifiantEntreprisePretAccordeValue: any;
  if (this.selectedOptionP === "MatriculeFiscal") {
    identifiantEntreprisePretAccordeValue = { MatriculeFiscal: this.step10Form.get('MatriculeFiscal')?.value };
  } else if (this.selectedOptionP === "Identifiant") {
    identifiantEntreprisePretAccordeValue = { Identifiant: this.step10Form.get('Identifiant')?.value };
  } else if (this.selectedOptionP === "EtatTerritoire") {
    identifiantEntreprisePretAccordeValue = { EtatTerritoire: this.step10Form.get('EtatTerritoire')?.value };
  }

  console.log(identifiantEntreprisePretAccordeValue);

  const newPretAccorde: PretAccorde = {
    identifiantEntreprise: JSON.stringify(identifiantEntreprisePretAccordeValue),
    raisonSociale: this.step10Form.get('raisonSociale')?.value,
    qualiteEntreprise: (this.step10Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step10Form.get('qualiteEntreprise')?.value,  
    devise: this.step10Form.get('devise')?.value,
    soldeOuverture: this.step10Form.get('SoldeOuverture')?.value,
    mouvementsAugmentations: this.step10Form.get('MouvementsAugmentations')?.value,
    mouvementsDiminutions: this.step10Form.get('MouvementsDiminutions')?.value,
    soldeCloture: this.step10Form.get('SoldeCloture')?.value,
    natureRelationEntreprise:(this.step10Form.get('natureRelationEntreprise')?.value === 'AutreNatureRelation') ? JSON.stringify(this.jsonObject) : this.step10Form.get('natureRelationEntreprise')?.value,  
    pretsInterets: this.step10Form.get('PretsInterets')?.value,
    tauxInterets: this.step10Form.get('TauxInterets')?.value,
   
  };

  this.PretAccordeService.createPretAccorde(newPretAccorde, idDeclaration).subscribe(
    data => {
      console.log('PretAccorde created:', data);
    
      this.resetForm10();
    },
    error => {
      console.error('Error creating PretAccorde :', error);
     
    }
  );
}

resetForm10(): void {
  // Reset form fields and set submitted to false
  this.submitted10 = false;
  this.step10Form.reset();
}












identifiantEntrepriseEmpruntContracte : any
submitted11= false;
step11Submit(): void {
  const idDeclaration = this.shared.getData(); 
  this.submitted11 = true;

  if (this.selectedNaturePretAccorde === "AutreNatureRelation"){
      

      
    this.jsonObject = {
      AutreNatureRelation: this.step11Form.get('AutreNatureRelation').value
  }
  
  }

  if (this.selectedQualiteEmpruntContracte === "AutreQualite"){
    

    
    this.jsonObject = {
      AutreQualite: this.step11Form.get('AutreQualite').value
  }}
  


  let identifiantEntrepriseEmpruntContracteValue: any;
  if (this.selectedOptionE === "MatriculeFiscal") {
    identifiantEntrepriseEmpruntContracteValue = { MatriculeFiscal: this.step11Form.get('MatriculeFiscal')?.value };
  } else if (this.selectedOptionE === "Identifiant") {
    identifiantEntrepriseEmpruntContracteValue = { Identifiant: this.step11Form.get('Identifiant')?.value };
  } else if (this.selectedOptionE === "EtatTerritoire") {
    identifiantEntrepriseEmpruntContracteValue = { EtatTerritoire: this.step11Form.get('EtatTerritoire')?.value };
  }

  console.log(identifiantEntrepriseEmpruntContracteValue);

  const newEmpruntContracte: EmpruntContracte = {
    identifiantEntreprise: JSON.stringify(identifiantEntrepriseEmpruntContracteValue),
    raisonSociale: this.step11Form.get('raisonSociale')?.value,
    qualiteEntreprise: (this.step11Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step11Form.get('qualiteEntreprise')?.value,    
    devise: this.step11Form.get('devise')?.value,
    soldeOuverture: this.step11Form.get('SoldeOuverture')?.value,
    mouvementsAugmentations: this.step11Form.get('MouvementsAugmentations')?.value,
    mouvementsDiminutions: this.step11Form.get('MouvementsDiminutions')?.value,
    soldeCloture: this.step11Form.get('SoldeCloture')?.value,
    natureRelationEntreprise:(this.step11Form.get('natureRelationEntreprise')?.value === 'AutreNatureRelation') ? JSON.stringify(this.jsonObject) : this.step11Form.get('natureRelationEntreprise')?.value,    
    empruntInterets: this.step11Form.get('empruntInterets')?.value,
    tauxInterets: this.step11Form.get('TauxInterets')?.value,
    declaration: this.declarationId
  };

  this.EmpruntContracteService.createEmpruntContracte(newEmpruntContracte, idDeclaration).subscribe(
    data => {
      console.log('EmpruntContracte created:', data);
     
      this.resetForm11();
    },
    error => {
      console.error('Error creating EmpruntContracte :', error);
     
    }
  );
}

resetForm11(): void {
  // Reset form fields and set submitted to false
  this.submitted11 = false;
  this.step11Form.reset();
}










identifiantEntrepriseContrepartieNonMonetaire : any
submitted12= false;
step12Submit(): void {
  const idDeclaration = this.shared.getData(); 
  this.submitted12 = true;

  if (this.selectedNatureContrepartieNonMonetaire === "AutreNatureRelation"){
      

      
    this.jsonObject = {
      AutreNatureRelation: this.step12Form.get('AutreNatureRelation').value
  }
  
  }

  if (this.selectedQualiteContrepartieNonMonetaire=== "AutreQualite"){
    

    
    this.jsonObject = {
      AutreQualite: this.step12Form.get('AutreQualite').value
  }}
  


  let identifiantEntrepriseContrepartieNonMonetaire: any;
  if (this.selectedOptionCNM === "MatriculeFiscal") {
    identifiantEntrepriseContrepartieNonMonetaire = { MatriculeFiscal: this.step12Form.get('MatriculeFiscal')?.value };
  } else if (this.selectedOptionCNM === "Identifiant") {
    identifiantEntrepriseContrepartieNonMonetaire = { Identifiant: this.step12Form.get('Identifiant')?.value };
  } else if (this.selectedOptionCNM === "EtatTerritoire") {
    identifiantEntrepriseContrepartieNonMonetaire = { EtatTerritoire: this.step12Form.get('EtatTerritoire')?.value };
  }

  console.log(identifiantEntrepriseContrepartieNonMonetaire);

  const newContrepartieNonMonetaire: ContrepartieNonMonetaire = {
    identifiantEntreprise: JSON.stringify(identifiantEntrepriseContrepartieNonMonetaire),
    raisonSociale: this.step12Form.get('raisonSociale')?.value,
    qualiteEntreprise: (this.step12Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step12Form.get('qualiteEntreprise')?.value,    
    natureRelationEntreprise:(this.step12Form.get('natureRelationEntreprise')?.value === 'AutreNatureRelation') ? JSON.stringify(this.jsonObject) : this.step12Form.get('natureRelationEntreprise')?.value,    
    affirmation: this.step12Form.get('affirmation')?.value,
    natureBiensOuService: this.step12Form.get('NatureBiensOuService')?.value,
    natureContrepartie: this.step12Form.get('NatureContrepartie')?.value,
    
  };

  this.ContrepartieNonMonetaireService.createContrepartieNonMonetaire(newContrepartieNonMonetaire, idDeclaration).subscribe(
    data => {
      console.log('ContrepartieNonMonetaire created:', data);
     
      this.resetForm12();
    },
    error => {
      console.error('Error creating ContrepartieNonMonetaire :', error);
     
    }
  );
}

resetForm12(): void {
  // Reset form fields and set submitted to false
  this.submitted12 = false;
  this.step12Form.reset();
}


















identifiantEntrepriseOperationsAccordsPrealables : any
submitted13= false;
step13Submit(): void {
  this.submitted13 = true;

  if (this.selectedNatureOperationsAccordsPrealables === "AutreNatureRelation"){
      

      
    this.jsonObject = {
      AutreNatureRelation: this.step13Form.get('AutreNatureRelation').value
  }
  
  }

  if (this.selectedQualiteOperationsAccordsPrealables== "AutreQualite"){
    

    
    this.jsonObject = {
      AutreQualite: this.step13Form.get('AutreQualite').value
  }}
  


  let identifiantEntrepriseOperationsAccordsPrealables: any;
  if (this.selectedOptionOAP === "MatriculeFiscal") {
    identifiantEntrepriseOperationsAccordsPrealables = { MatriculeFiscal: this.step13Form.get('MatriculeFiscal')?.value };
  } else if (this.selectedOptionOAP === "Identifiant") {
    identifiantEntrepriseOperationsAccordsPrealables = { Identifiant: this.step13Form.get('Identifiant')?.value };
  } else if (this.selectedOptionOAP === "EtatTerritoire") {
    identifiantEntrepriseOperationsAccordsPrealables = { EtatTerritoire: this.step13Form.get('EtatTerritoire')?.value };
  }

  console.log(identifiantEntrepriseOperationsAccordsPrealables);

  const newOperationsAccordsPrealables: OperationsAccordsPrealables = {
    identifiantEntreprise: JSON.stringify(identifiantEntrepriseOperationsAccordsPrealables),
    raisonSociale: this.step13Form.get('raisonSociale')?.value,
    qualiteEntreprise: (this.step13Form.get('qualiteEntreprise')?.value === 'AutreQualite') ? JSON.stringify(this.jsonObject) : this.step12Form.get('qualiteEntreprise')?.value,    
    natureRelationEntreprise:(this.step13Form.get('natureRelationEntreprise')?.value === 'AutreNatureRelation') ? JSON.stringify(this.jsonObject) : this.step12Form.get('natureRelationEntreprise')?.value,    
    affirmation: this.step13Form.get('affirmation')?.value,
    natureOperation: this.step13Form.get('natureOperation')?.value,
    exerciceDebut: this.step13Form.get('exerciceDebut')?.value,
    exerciceFin: this.step13Form.get('exerciceFin')?.value,
    
  };

  this.OperationsAccordsPrealablesService.createOperationsAccordsPrealables(newOperationsAccordsPrealables, 1).subscribe(
    data => {
      console.log('OperationsAccordsPrealables created:', data);
     
      this.resetForm13();
    },
    error => {
      console.error('Error creating OperationsAccordsPrealables :', error);
     
    }
  );
}

resetForm13(): void {
  // Reset form fields and set submitted to false
  this.submitted13 = false;
  this.step13Form.reset();
}
}