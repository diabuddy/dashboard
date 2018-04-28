import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject(),
  loggedIn: true,
  sidenav: false,
  lockedSidenav: true,

  actions: {
      toggleSidenav () {
        this.toggleProperty('sidenav')
        this.toggleProperty('lockedSidenav')
      }
  }
});
