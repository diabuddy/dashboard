import Controller from '@ember/controller';

import { inject } from '@ember/service';
import sweetAlert from 'ember-sweetalert';

export default Controller.extend({
  session: inject(),
  queryParams: ['id'],
  id: null,
  actions: {
    sponsorThisChild (id, child) {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const query = `guardians/${btoa(currentUser.email)}/children/${id}`
        firebase.database().ref(query).set({
          id,
          name: child.name,
          email: child.email
        });
        sweetAlert({
          title: 'Success!',
          type: 'success',
          confirmButtonText: 'Continue',
          allowOutsideClick: false
        }).then((confirm)=> {
          this.transitionToRoute('overview')
        }).catch(() => {});
      }
    },
    declineThisChild () {
      this.transitionToRoute('overview');
    }
  }
});
