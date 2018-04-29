import Controller from '@ember/controller';
import { observer, computed } from '@ember/object';

export default Controller.extend({
  selectedRange: {
    label: "24 Hours",
    value: 24
  },
  mockUsers: ['3Nwq2LuIs9QaVxzEo57szgBC7ME2', '68NeeBd25GZ580xH4ZSFc415UWk2', 'E4HHocNr7yTwBBbPpdOWX6YyVH12'],
  userScores: computed( 'model', function() {
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
  dataChange: observer('model', function () {
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
