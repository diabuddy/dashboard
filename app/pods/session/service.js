import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  beginAuth () {
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });
  }
});
