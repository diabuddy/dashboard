import Component from '@ember/component';
import { computed } from '@ember/object';
import faker from 'faker';
import moment from 'moment';


export default Component.extend({
  tagName: '',
  didInsertElement() {

    var scatterChartData = {
      datasets: [{
        pointStyle: 'circle',
        pointRadius: 6,
        pointHoverRadius: 8,
        label: 'Piggy',
        borderColor: faker.commerce.color(),
        data: [{
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(10, 15)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(10, 15)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(10, 15)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(10, 15)
        }]
      }, {
        pointStyle: 'circle',
        pointRadius: 6,
        pointHoverRadius: 8,
        label: 'Mary',
        borderColor: faker.commerce.color(),
        data: [{
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(10, 15)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(10, 15)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(10, 15)
        }, {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(10, 15)
        },
        {
          x: faker.date.between('2018-04-28', '2018-04-29'),
          y: faker.random.number(10, 15)
        },
        {
          x: moment().hours(11).minutes(0).seconds(0),
          y: faker.random.number(2, 7)
        }
        ]
      }]
    };

    var ctx = document.getElementById('insulin-shot-plot').getContext('2d');
    window.myScatter = Chart.Scatter(ctx, {
      data: scatterChartData,
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              min: moment().hours(11).minutes(0).seconds(0),
              max: moment().hours(24).minutes(0).seconds(0),

              displayFormats: {
                hour: 'h:mm a'
              }
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Unit'
            },
            ticks: {
              min: 0,
              max: 15,
              stepSize: 1
            }
          }]
        },
        showLines: false,
        title: {
          display: true,
          text: 'Insulin Shot Plot'
        },
      }
    });
  }
});
