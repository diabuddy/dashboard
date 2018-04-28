import Route from '@ember/routing/route';

export default Route.extend({
  redirect () {
    const email = localStorage['email'];
    if (email) {
      if (this.get('router.currentRouteName') === 'login') {
        this.transitionTo('overview')
      }
    } else {
      this.transitionTo('login');
    }
  }
});
