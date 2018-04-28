import Controller from '@ember/controller';

import { computed } from '@ember/object';

import faker from 'faker';

export default Controller.extend({
  userListItems: computed('model', function () {
    const model = this.get('model');
    return Object.keys(model).map(key => Object.assign({
      profile_img: faker.image.avatar()
    }, model[key]));
  })
});
