import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  country: DS.attr('string'),
  amount: DS.attr('number'),
  refund: DS.attr('number'),
  refundAmount: DS.attr('number'),
  taxRate: DS.attr('number')
});
