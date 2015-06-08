import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('pod1');
    this.route('pod2');
    this.route('pod3');
});

export default Router;
