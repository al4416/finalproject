import Ember from 'ember';

let country_tax = [{
  country: 'Austria',
  tax_rate: '0.20',
  tax_rate_display: '20%',
  limit: '75.01',
  limit_display: '€75.01',

}, {
  country: 'Belgium',
  tax_rate: '0.21',
  tax_rate_display: '21%',
  limit: '125.01',
  limit_display: '€125.01',
}, {
  country: 'Croatia',
  tax_rate: '0.25',
  tax_rate_display: '25%',
  limit: '740.00',
  limit_display: '740.00 HRK',
}, {
  country: 'Czech Republic',
  tax_rate: '0.21',
  tax_rate_display: '21%',
  limit: '2,001.00',
  limit_display: '€2,001.00',
}, {
  country: 'Denmark',
  tax_rate: '0.25',
  tax_rate_display: '25%',
  limit: '300.00',
  limit_display: '300.00 DKK',
},{
  country: 'Estonia',
  tax_rate: '0.20',
  tax_rate_display: '20%',
  limit: '38.01',
  limit_display: '€38.01',
}, {
  country: 'Finland',
  tax_rate: '0.24',
  tax_rate_display: '24%',
  limit: '40.00',
  limit_display: '€40.00',
}, {
  country: 'France',
  tax_rate: '0.20',
  tax_rate_display: '20%',
  limit: '175.01',
  limit_display: '€175.01',
}, {
  country: 'Germany',
  tax_rate: '0.19',
  tax_rate_display: '19%',
  limit: '25.00',
  limit_display: '€25.00',
}, {
  country: 'Great Britain',
  tax_rate: '0.20',
  tax_rate_display: '20%',
  limit: '30.00',
  limit_display: '£30.00',
}, {
  country: 'Greece',
  tax_rate: '0.23',
  tax_rate_display: '23%',
  limit: '120.00',
  limit_display: '€120.00',
}, {
  country: 'Hungary',
  tax_rate: '0.27',
  tax_rate_display: '27%',
  limit: '52,001.00',
  limit_display: '52,001.00 HUF',
}, {
  country: 'Ireland',
  tax_rate: '0.23',
  tax_rate_display: '23%',
  limit: '30.00',
  limit_display: '€30.00',
}, {
  country: 'Italy',
  tax_rate: '0.23',
  tax_rate_display: '23%',
  limit: '155.00',
  limit_display: '€155.00',
},{
  country: 'Latvia',
  tax_rate: '0.21',
  tax_rate_display: '21%',
  limit: '44.00',
  limit_display: '€44.00',
},{
  country: 'Lithuania',
  tax_rate: '0.21',
  tax_rate_display: '21%',
  limit: '200.00',
  limit_display: '200.00 LTL',
},{
  country: 'Luxembourg',
  tax_rate: '0.15',
  tax_rate_display: '15%',
  limit: '74.00',
  limit_display: '€74.00',
},{
  country: 'Netherlands',
  tax_rate: '0.21',
  tax_rate_display: '21%',
  limit: '50.00',
  limit_display: '€50.00',
},{
  country: 'Norway',
  tax_rate: '0.25',
  tax_rate_display: '25%',
  limit: '315.00',
  limit_display: '315.00 NOK',
},{
  country: 'Poland',
  tax_rate: '0.23',
  tax_rate_display: '23%',
  limit: '200.00',
  limit_display: '200.00 PLN',
},{
  country: 'Portugal',
  tax_rate: '0.23',
  tax_rate_display: '23%',
  limit: '61.35',
  limit_display: '€61.35',
},{
  country: 'Romania',
  tax_rate: '0.24',
  tax_rate_display: '24%',
  limit: '250.00',
  limit_display: '250.00 RON',
},{
  country: 'Slovakia',
  tax_rate: '0.20',
  tax_rate_display: '20%',
  limit: '175.01',
  limit_display: '€175.01',
},{
  country: 'Slovenia',
  tax_rate: '0.22',
  tax_rate_display: '22%',
  limit: '50.01',
  limit_display: '€50.01',
},{
  country: 'Spain',
  tax_rate: '0.21',
  tax_rate_display: '21%',
  limit: '90.16',
  limit_display: '€90.16',
},{
  country: 'Sweden',
  tax_rate: '0.25',
  tax_rate_display: '25%',
  limit: '200.00',
  limit_display: '200.00 SEK',
},{
  country: 'Switzerland',
  tax_rate: '0.08',
  tax_rate_display: '8%',
  limit: '300.00',
  limit_display: '300.00 CHF',
},{
  country: 'Turkey',
  tax_rate: '0.18',
  tax_rate_display: '18%',
  limit: '100.00',
  limit_display: '100.00 TRY',
}];

export default Ember.Route.extend({
      model() {
    return country_tax;
  },

});
