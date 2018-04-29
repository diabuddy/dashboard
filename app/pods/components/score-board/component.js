
import Component from '@ember/component';
import { computed } from '@ember/object';
import faker from 'faker';
import moment from 'moment';

const rand = () => Math.floor(Math.random() * 6) * 1;

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
          Math.floor(Math.random() * 6) + 1,
          rand(),
          10,
          rand()]
      }, {
        label: 'Tuesday',
        backgroundColor: blue,
        data: [
          faker.random.number(1, 9),
          faker.random.number(1, 9),
          faker.random.number(1, 9),
          rand()]
      }, {
        label: 'Wednesday',
        backgroundColor: green,
        data: [
          faker.random.number(1, 9),
          faker.random.number(1, 9),
          10,
          rand()]
      }, {
        label: 'Thursday',
        backgroundColor: yellow,
        data: [
          faker.random.number(1, 9),
          faker.random.number(1, 9),
          10,
          rand()]
      }, {
        label: 'Friday',
        backgroundColor: purple,
        data: [
          faker.random.number(1, 9),
          faker.random.number(1, 9),
          10,
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
