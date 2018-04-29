
import Component from '@ember/component';
import { computed } from '@ember/object';
import faker from 'faker';
import moment from 'moment';

const rand = i => Math.floor(Math.random() * i) + 1;

export default Component.extend({
  tagName: '',
  chartData: computed(function () {
    var red = '#E24570';
    var blue = '#328FE6';
    var green = '#4CB5B3';
    var yellow = '#F7C344';
    var purple = '#8647FC';


    return {
      labels: ['Andy', 'Mat', 'Beck'],
      datasets: [{
        label: 'Monday',
        backgroundColor: red,
        data: [
          rand(5),
          rand(9),
          10,
          rand(9)
        ]
      }, {
        label: 'Tuesday',
        backgroundColor: blue,
        data: [
          rand(9),
          rand(9),
          rand(9),
          rand(9)
        ]
      }, {
        label: 'Wednesday',
        backgroundColor: green,
        data: [
          rand(9),
          rand(9),
          10,
          rand(9)
        ]
      }, {
        label: 'Thursday',
        backgroundColor: yellow,
        data: [
          rand(9),
          rand(9),
          10,
          rand(9)
        ]
      }, {
        label: 'Friday',
        backgroundColor: purple,
        data: [
          rand(9),
          rand(9),
          10,
          rand(9)

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
