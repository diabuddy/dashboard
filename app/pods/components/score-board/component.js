
import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

const rand = () => Math.floor(Math.random() * 9) + 1

export default Component.extend({
  tagName: '',
  chartData: computed(function () {
    var red = '#E24570';
    var blue = '#328FE6';
    var green = '#4CB5B3';
    var yellow = '#F7C344';
    var purple = '#8647FC';


    return {
      labels: ['Avocado', 'Pina', 'Beck'],
      datasets: [{
        label: 'Monday',
        backgroundColor: red,
        data: [
          rand(),
          rand(),
          rand(),
          rand()
        ]
      }, {
        label: 'Tuesday',
        backgroundColor: blue,
        data: [
          rand(),
          rand(),
          rand(),
          rand()
        ]
      }, {
        label: 'Wednesday',
        backgroundColor: green,
        data: [
          rand(),
          rand(),
          rand(),
          rand()
        ]
      }, {
        label: 'Thursday',
        backgroundColor: yellow,
        data: [
          rand(),
          rand(),
          rand(),
          rand()
        ]
      }, {
        label: 'Friday',
        backgroundColor: purple,
        data: [
          rand(),
          rand(),
          rand(),
          rand()

        ]
      }]
    }
  }),
  options: {
    scales: {
      xAxes: [{
        stacked: true,
        scaleLabel: {
          display: true
        }
      }],
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'points'
        },
        ticks: {
          min: 0
        }
      }]
    },
    showLines: false,
  }
});
