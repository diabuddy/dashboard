import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  session: inject(),
  firebase: inject(),
  redirect () {
    this.get('firebase.isUp');
    if (this.get('session.isAuthenticated')) {
      if (this.get('router.currentRouteName') === 'login') {
        this.transitionTo('overview')
      }
    } else {
      this.transitionTo('login');
    }
  }
});
