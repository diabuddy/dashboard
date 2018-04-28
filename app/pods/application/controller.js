import Controller from '@ember/controller';

export default Controller.extend({
    loggedIn: true,
    sidenav: false,
    lockedSidenav: true,
    expandBuds: false,
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
            console.log(buddies)
            this.set('buddies', buddies)
            console.log(this.get('buddies'))
        }
    }
});
