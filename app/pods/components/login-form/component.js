import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  tagName: '',
  session: inject(),
  didInsertElement () {
    this.get('session').attemptAuthenticate(this.get('callback'));
  }
});
