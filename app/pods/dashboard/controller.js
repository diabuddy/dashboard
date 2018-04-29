import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    selectedRange: {
        label: "24 Hours",
        value: 24
    },
    selectedBuddies: [{'3Nwq2LuIs9QaVxzEo57szgBC7ME2': "Steve Schmid"}, {'68NeeBd25GZ580xH4ZSFc415UWk2': "Mat Schmid"}, {'E4HHocNr7yTwBBbPpdOWX6YyVH12': "Mary Schmid"}],

    userData: computed('model', 'selectedBuddies', function () {
        const model = this.get('model');
        const buddies = this.get('selectedBuddies')
        let data = []
        for(let x of buddies){
            data.push(model[Object.keys(x)[0]])
        }
        console.log(data)
        return data
      })
});
