import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('FAQ');
  this.route('about');
  this.route('country_rates');
});

export default Router;
