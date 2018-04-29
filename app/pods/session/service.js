import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  currentUser: null,
  init () {
    this.set('currentUser', JSON.parse(localStorage.currentUser || null));
  },
  attemptAuthenticate (callback = () => {}) {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('.login-form', {
      signInSuccessUrl: 'http://localhost:4200/overview',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: (currentUser, credential, redirectUrl) => {
          const serializedUserQuery = `guardians/${btoa(currentUser.email)}`;
          firebase.database().ref(serializedUserQuery).once('value')
            .then(snap => snap.val())
            .then(response => {
              if (response === null) {
                firebase.database().ref(serializedUserQuery).set({
                  name: currentUser.displayName,
                  email: currentUser.email,
                  children: {
                    '68NeeBd25GZ580xH4ZSFc415UWk2': {
                      email: "matschmid@gmail.com",
                      id: '68NeeBd25GZ580xH4ZSFc415UWk2',
                      name: "Mat Schmid"
                    }
                  }
                });
              }
            })


          localStorage['currentUser'] = JSON.stringify(currentUser);
          this.set('currentUser', currentUser)

          callback(...arguments);
        }
      }
      // Other config options...
    });
  },
  logout () {
    firebase.auth().signOut();
    delete localStorage.currentUser;
    window.location.reload();
  }
});
