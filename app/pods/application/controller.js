import Controller from '@ember/controller';

export default Controller.extend({
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
