import Component from '@ember/component';
import { computed } from '@ember/object';
import faker from 'faker';
import moment from 'moment';


export default Component.extend({
  tagName: '',
  didInsertElement() {

    var scatterChartData = {
      datasets: [{
        label: 'Piggy',
        borderColor: faker.commerce.color(),
        data: [{
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(4, 5.4)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(4, 5.4)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(4, 5.4)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(4, 5.4)
        }]
      }, {
        label: 'Mary',
        borderColor: faker.commerce.color(),
        data: [{
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(4, 5.4)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(4, 5.4)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(4, 5.4)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(4, 5.4)
        }]
      }]
    };

    window.onload = function () {
      var ctx = document.getElementById('blood-sugar-plot').getContext('2d');
      window.myScatter = Chart.Scatter(ctx, {
        data: scatterChartData,
        options: {
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                displayFormats: {
                  hour: 'h:mm a'
                }
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'mg'
              },
              ticks: {
                min: 0,
                max: 10,
                stepSize: 1
              }
            }]
          },
          showLines: false,
          title: {
            display: true,
            text: 'Blood Sugar Chart'
          },
        }
      });
    };
  }
});
