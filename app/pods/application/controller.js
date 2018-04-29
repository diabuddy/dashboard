import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    loggedIn: true,
    session: inject(),
    sidenav: false,
    lockedSidenav: true,
    expandBuds: false,
    aboutModal: false,
    items: [
      {
        title: 'Logout',
        action: 'logout',
        icon: 'exit to app'
      }
    ],
    buddies: [
        {
            name: "Steve",
            uid:"1"

        },
        {
            name: "Mary",
            uid:"2"
        },
        {
            name: "Calvin",
            uid:"3"
        },
    ],
    team: [
        {
            name: "Nicholas Lewanowicz",
            role: "Frontend Developer",
            linkedIn: "https://www.linkedin.com/in/nicklewanowicz/",
            photo: "nick.jpg"
        },
        {
            name: "Mat Schmid",
            role: "iOS Developer",
            linkedIn: "https://www.linkedin.com/in/matschmid/",
            photo: "nick.jpg"
        },
        {
            name: "Seena Rowhani",
            role: "Frontend Developer",
            linkedIn: "https://www.linkedin.com/in/srowhani/",
            photo: "nick.jpg"
        },
        {
            name: "Nicholas Lewanowicz",
            role: "Frontend Developer",
            linkedIn: "https://www.linkedin.com/in/nicklewanowicz/",
            photo: "nick.jpg"
        }
    ],
    actions: {
        toggleSidenav () {
            this.toggleProperty('sidenav')
            this.toggleProperty('lockedSidenav')
        },
        toggleExpandedItem (item) {
            this.toggleProperty(item)
            console.log(item, this.get(item))
        },
        selectedBuddies (buddyId) {
            let buddies = this.get('buddies')
            for(let i = 0; i< buddies.length;i++){
                if(buddies[i].uid == buddyId){
                    if(buddies[i].selected == undefined || buddies[i].selected == true){
                        buddies[i].selected = false
                    } else {
                        buddies[i].selected = true
                    }
                    break;
                }
            }
            this.set('buddies', buddies)
        },
        logout () {
          this.get('session').logout()
        },
        toggleAboutUs () {
            this.toggleProperty('aboutModal')
        }
    }
});
