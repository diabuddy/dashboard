import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('dashboard');
  this.route('overview');
  this.route('login');
  this.route('test');
  this.route('insulin-shot-plot');
});

export default Router;
