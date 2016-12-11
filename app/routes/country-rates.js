import Ember from 'ember';

let country_tax = [{
  country: 'Great Britain',
  tax_rate: '0.20',
  tax_rate_display: '20%',
  limit: '30',
  limit_display: '£30',

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
  limit: '25',
  limit_display: '€25',
}];

export default Ember.Route.extend({
      model() {
    return country_tax;
  }
});
