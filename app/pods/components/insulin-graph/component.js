import Component from '@ember/component';
import { computed } from '@ember/object';
import faker from 'faker';
import moment from 'moment';


export default Component.extend({
  didInsertElement() {

    var scatterChartData = {
      datasets: [{
        label: 'Piggy',
        borderColor: faker.commerce.color(),
        data: [{
          x: 12,
          y: 23,
        }, {
          x: 23,
          y: 3,
        }, {
          x: 5,
          y: 5,
        }, {
          x: 6,
          y: 67
        }]
      }, {
        label: 'Mary',
        borderColor: faker.commerce.color(),
        data: [{
          x: faker.date.between(),
          y: 23,
        }, {
          x: faker.date.between(),
          y: 8,
        }, {
          x: faker.date.between(),
          y: 2,
        }, {
          x: faker.date.between(),
          y: 5
        }]
      }]
    };

    window.onload = function () {
      var ctx = document.getElementById('insulin-shot-chart').getContext('2d');
      window.myScatter = Chart.Scatter(ctx, {
        data: scatterChartData,
        options: {
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                unit: 'hour',
              }
            }]
          },
          showLines: false,
          title: {
            display: true,
            text: 'Insulin Shot Chart'
          },
        }
      });
    };
  }
});
