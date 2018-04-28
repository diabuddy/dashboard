import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  session: inject(),
  redirect () {
    if (this.get('session.currentUser')) {
      if (this.get('router.currentRouteName') === 'login') {
        this.transitionTo('overview')
      }
    } else {
      this.transitionTo('login');
    }
  }
});
