import Controller from '@ember/controller';
import { observer, computed } from '@ember/object';

export default Controller.extend({
  selectedRange: {
    label: "24 Hours",
    value: 24
  },
  mockUsers: [],
  insulinUnit: [],
  glucoseUpdate: [],
  calorieUpdate: [],
  modelObserver: observer('model', function () {
    const currentUser = firebase.auth().currentUser;
    const query = `guardians/${btoa(currentUser.email)}/children`

    firebase.database().ref(query).once('value').then(snapshot => snapshot.val())
      .then(response => {
        if (response !== null) {
          this.set('mockUsers', Object.keys(response));
        }
      })
  }),
  userActivity: computed('mockUsers', function() {
    const model = this.get('model');
    const buddies = this.get('mockUsers')
    let data = []
    for (let id of buddies) {
      data.push(Object.assign({ id }, model[id]))
    }
    let events = []
    for(let person of data){
        if(person != undefined){
            for (let day in person.history){
                for (let event in person.history[day]){
                    events.push(
                        {
                            name: person.name,
                            type: person.history[day][event].eventType,
                            date: day,
                            time: Math.floor(person.history[day][event].timestamp/60)
                        }
                    )
                }
            }
        }
    }
    events.sort(function(a,b) {return (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0);} );
    return events
  }),
  userScores: computed('mockUsers', function() {
    const model = this.get('model');
    const buddies = this.get('mockUsers')
    let data = []
    for (let id of buddies) {
      data.push(Object.assign({ id }, model[id]))
    }
    let scores = []
    for(let person of data){
        let score = 0
        if(person != undefined){
            for (let day in person.history){
                for (let event in person.history[day]){
                    if(person.history[day][event].eventType == "insulinUpdate"){
                        score+= 500
                    }else if(person.history[day][event].eventType == "glucoseUpdate"){
                        score+= 500
                    }else{
                        score+= 500
                    }
                }
            }
            scores.push({name: person.name, score: score})
        }
    }
    console.log(scores)
    return scores
  }),
  dataChange: observer('mockUsers', function () {
    const model = this.get('model');
    const buddies = this.get('mockUsers')
    let data = []
    for (let id of buddies) {
      data.push(Object.assign({ id }, model[id]))
    }
    const allUserData = [];
    const insulinUnit = [];
    const glucoseUpdate = [];
    const calorieUpdate = [];
    const rewards = [];
    for (var i = 0; i < buddies.length; i++) {
      allUserData.push(data[i])
    }

    const el = allUserData.reduce((sum, user) => {
      const flatHistoryItem = Object.keys(user.history)
        .reduce((acc, date) => [...acc, ...Object.keys(user.history[date]).map(eventId => Object.assign({
          user,
        }, user.history[date][eventId]))], [])
      return [...sum, ...flatHistoryItem]
    }, []);


    //insulinUpdate is the insulin unit that the user used before meal
    for (var i = 0; i < el.length; i++) {
      if (el[i].eventType === "insulinUpdate") {
        insulinUnit.push(el[i])
      } else if (el[i].eventType === "glucoseUpdate") {
        glucoseUpdate.push(el[i])
      } else if (el[i].eventType === "calorieUpdate") {
        calorieUpdate.push(el[i])
      }
    }

    this.setProperties({ insulinUnit, glucoseUpdate, calorieUpdate })
    this.set("allPoints", el);
    return el
  })
});
