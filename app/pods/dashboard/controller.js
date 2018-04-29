import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    selectedRange: {
        label: "24 Hours",
        value: 24
    },
    mockUsers: ['3Nwq2LuIs9QaVxzEo57szgBC7ME2', '68NeeBd25GZ580xH4ZSFc415UWk2', 'E4HHocNr7yTwBBbPpdOWX6YyVH12'],
    userData: computed('model', function () {
        const model = this.get('model');
        const buddies = this.get('mockUsers')
        let data = []
        //debugger
        for(let x of buddies){
            data.push(model[x])
        }

        return data
      })
});
