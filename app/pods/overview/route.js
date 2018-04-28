import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return firebase.database().ref('/users').once('value').then(snapshot => snapshot.val())
  }
});
