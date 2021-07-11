import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  name = 'Angular';
  private stepper: Stepper;

  public country: {"france","Afganistant"};
  //   'France',
  // 'Afghanistan',
  // 'Aland Islands'
  // Albania
  // Algeria
  // American Samoa
  // Andorra
  // Angola
  // Anguilla
  // Antarctica
  // Antigua and Barbuda
  // Argentina
  // Armenia
  // Aruba
  // Australia
  // Austria
  // Azerbaijan
  // Bahamas
  // Bahrain
  // Bangladesh
  // Barbados
  // Belarus
  // Belgium
  // Belize
  // Benin
  // Bermuda
  // Bhutan
  // Bolivia
  // Bonaire, Saint Eustatius and Saba
  // Bosnia and Herzegovina
  // Botswana
  // Bouvet Island
  // Brazil
  // British Indian Ocean Territory
  // Brunei Darussalam
  // Bulgaria
  // Burkina Faso
  // Burundi
  // Cambodia
  // Cameroon
  // Canada
  // Cape Verde
  // Cayman Islands
  // Central African Republic
  // Chad
  // Chile
  // China
  // Christmas Island
  // Cocos (Keeling) Islands
  // Colombia
  // Comoros
  // Congo
  // Congo-Democratic Republic of
  // Cook Islands
  // Costa Rica
  // Cote D'Ivoire
  // Croatia
  // Cuba
  // Curacao
  // Cyprus
  // Czech Republic
  // Denmark
  // Djibouti
  // Dominica
  // Dominican Republic
  // Ecuador
  // Egypt
  // El Salvador
  // Equatorial Guinea
  // Eritrea
  // Estonia
  // Ethiopia
  // Falkland Islands (Malvinas)
  // Faroe Islands
  // Fiji
  // Finland
  // French Guiana
  // French Polynesia
  // French Southern Territories
  // Gabon
  // Gambia
  // Georgia
  // Germany
  // Ghana
  // Gibraltar
  // Greece
  // Greenland
  // Grenada
  // Guadeloupe
  // Guam
  // Guatemala
  // Guernsey
  // Guinea
  // Guinea-Bissau
  // Guyana
  // Haiti
  // Heard and McDonald Islands
  // Honduras
  // Hong Kong SAR
  // Hungary
  // Iceland
  // India
  // Indonesia
  // Iran
  // Iraq
  // Ireland
  // Isle Of Man
  // Israel
  // Italy
  // Jamaica
  // Japan
  // Jersey
  // Jordan
  // Kazakhstan
  // Kenya
  // Kiribati
  // Korea-Dem People's Republic of
  // Korea-Republic of
  // Kuwait
  // Kyrgyzstan
  // Lao People's Dem Republic
  // Latvia
  // Lebanon
  // Lesotho
  // Liberia
  // Libya
  // Liechtenstein
  // Lithuania
  // Luxembourg
  // Macao SAR
  // Macedonia
  // Madagascar
  // Malawi
  // Malaysia
  // Maldives
  // Mali
  // Malta
  // Marshall Islands
  // Martinique
  // Mauritania
  // Mauritius
  // Mayotte
  // Mexico
  // Micronesia-Federated States Of
  // Moldova
  // Monaco
  // Mongolia
  // Montenegro
  // Montserrat
  // Morocco
  // Mozambique
  // Myanmar
  // Namibia
  // Nauru
  // Nepal
  // Netherlands
  // New Caledonia
  // New Zealand
  // Nicaragua
  // Niger
  // Nigeria
  // Niue
  // Norfolk Island
  // Northern Mariana Islands
  // Norway
  // Oman
  // Pakistan
  // Palau
  // Palestinian Territory
  // Panama
  // Papua New Guinea
  // Paraguay
  // Peru
  // Philippines
  // Pitcairn
  // Poland
  // Portugal
  // Puerto Rico
  // Qatar
  // Reunion
  // Romania
  // Russian Federation
  // Rwanda
  // S Georgia-S Sandwich Islands
  // Saint Barthelemy
  // Saint Kitts And Nevis
  // Saint Lucia
  // Saint Maarten
  // Saint Martin
  // Saint Pierre And Miquelon
  // Saint Vincent and the Grenadines
  // Samoa
  // San Marino
  // Sao Tome and Principe
  // Saudi Arabia
  // Senegal
  // Serbia
  // Seychelles
  // Sierra Leone
  // Singapore
  // Slovakia
  // Slovenia
  // Solomon Islands
  // Somalia
  // South Africa
  // South Sudan
  // Spain
  // Sri Lanka
  // St Helena-Asc-Tristan d Cunha
  // Sudan
  // Suriname
  // Svalbard And Jan Mayen
  // Swaziland
  // Sweden
  // Switzerland
  // Syrian Arab Republic
  // Taiwan
  // Tajikistan
  // Tanzania
  // Thailand
  // Timor-Leste
  // Togo
  // Tokelau
  // Tonga
  // Trinidad and Tobago
  // Tunisia
  // Turkey
  // Turkmenistan
  // Turks and Caicos Islands
  // Tuvalu
  // US Minor Outlying Islands
  // Uganda
  // Ukraine
  // United Arab Emirates
  // United Kingdom
  // United States
  // Uruguay
  // Uzbekistan
  // Vanuatu
  // Vatican City State
  // Venezuela
  // Vietnam
  // Virgin Islands - British
  // Virgin Islands - U.S.
  // Wallis and Futuna
  // Western Sahara
  // Yemen
  // Zambia
  // Zimbabwe

  /*--------------------------------------------------------------------*/


  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '0.10',
      currencyCode: 'EUR',
      countryCode: 'BE'
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION']
  };

  onLoadPaymentData = (
    event: Event
  ): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
    paymentData
  ) => {
    console.log('payment authorized', paymentData);
    return {
      transactionState: 'SUCCESS'
    };
  }

  onError = (event: ErrorEvent): void => {
    console.error('error', event.error);
  }

  /*-------------------------------------------------------------------*/

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  constructor() { }

  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

}
