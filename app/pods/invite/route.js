import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const id = params.id;

    if (!id) {
      this.transitionTo('overview');
    }

    return new Promise((resolve, reject) => {
      return firebase.database()
        .ref('users/' + id)
        .once('value')
        .then(result => result.val())
        .then(response => response !== null ? resolve(response) : (() => {
          resolve(null);
          this.transitionTo('overview');
        })());
    })

  }
});
