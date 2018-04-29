import Controller from '@ember/controller';

import { inject } from '@ember/service';

export default Controller.extend({
  session: inject(),
  queryParams: ['id'],
  id: null,
  actions: {
    sponsorThisChild (id, child) {
      const currentUser = firebase.auth().currentUser;
      if (firebase.auth().currentUser) {
        // firebase.database().ref('guardians/')
      }
    },
    declineThisChild () {
      this.transitionToRoute('overview');
    }
  }
});
