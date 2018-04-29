
import Component from '@ember/component';
import { computed } from '@ember/object';
import faker from 'faker';
import moment from 'moment';

export default Component.extend({
  tagName: '',
  didInsertElement() {
    var red = '#E24570';
    var blue = '#328FE6';
    var green = '#4CB5B3';
    var yellow = '#F7C344';
    var purple = '#8647FC';


    var barChartData = {
      labels: ['Seena', 'Mat', 'Yuhan', 'Nic'],
      datasets: [{
        label: 'Monday',
        backgroundColor: red,
        data: [
          faker.random.number(1, 5),
          faker.random.number(1, 9),
          10,
          faker.random.number(1, 9)
        ]
      }, {
        label: 'Tuesday',
        backgroundColor: blue,
        data: [
          faker.random.number(1, 9),
          faker.random.number(1, 9),
          faker.random.number(1, 9),
          faker.random.number(1, 9)
        ]
      }, {
        label: 'Wednesday',
        backgroundColor: green,
        data: [
          faker.random.number(1, 9),
          faker.random.number(1, 9),
          10,
          faker.random.number(1, 9)
        ]
      }, {
        label: 'Thursday',
        backgroundColor: yellow,
        data: [
          faker.random.number(1, 9),
          faker.random.number(1, 9),
          10,
          faker.random.number(1, 9)
        ]
      }, {
        label: 'Friday',
        backgroundColor: purple,
        data: [
          faker.random.number(1, 9),
          faker.random.number(1, 9),
          10,
          faker.random.number(1, 9)

        ]
      }]
    };
    var ctx = document.getElementById('score-board-plot').getContext('2d');
    window.myBar = Chart.Bar(ctx, {
      data: barChartData,
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
  }
});
