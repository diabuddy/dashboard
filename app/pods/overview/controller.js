import Controller from '@ember/controller';

import { observer } from '@ember/object';

import faker from 'faker';

export default Controller.extend({
  computeModel: observer('model', function () {
    const model = this.get('model');
    const currentUser = firebase.auth().currentUser;
    const query = `guardians/${btoa(currentUser.email)}/children`

    firebase.database().ref(query).once('value').then(snapshot => snapshot.val())
      .then(response => {
        if (response !== null) {
          const result = Object.keys(model).filter(key => response[key]).map(key => Object.assign({
            profile_img: faker.image.avatar()
          }, model[key]))
          this.set('userListItems', result)
        }
      })
  })
});
