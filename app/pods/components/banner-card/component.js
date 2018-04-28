import Component from '@ember/component';

export default Component.extend({
    ranges: [
        {
            label: "24 Hours",
            value: 24
        },
        {
            label: "3 Days",
            value: 72
        },{
            label: "1 Week",
            value: 168
        }
    ],
    selectedRange: {
        label: "24 Hours",
        value: 24
    }
});
