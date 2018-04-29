import Component from '@ember/component';
import { computed } from '@ember/object';
import faker from 'faker';
import moment from 'moment';


export default Component.extend({
  tagName: '',
  options: computed( function () {
    return { 
      scales: {
        xAxes: [{
          ticks: {
            minRotation: 45,
          },
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
            labelString: 'mmol/L'
          },
          ticks: {
            min: 0,
            max: 11,
            stepSize: 1
          }
        }]
      },
      showLines: false,
    }
  }),
  scatterChartData: computed( function () {
    let colorPoint = faker.commerce.color();
    let colorPoint2 = faker.commerce.color();
    let dotBorder = '#000000';
    return { 
      datasets: [{
      pointStyle: 'circle',
      pointRadius: 6,
      pointHoverRadius: 8,
      pointBorderColor: dotBorder,
      pointBackgroundColor: colorPoint,
      backgroundColor: colorPoint,
      backgroundBorderColor: colorPoint,
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
      pointStyle: 'circle',
      pointRadius: 6,
      pointHoverRadius: 8,
      pointBorderColor: dotBorder,
      pointBackgroundColor: colorPoint2,
      backgroundColor: colorPoint2,
      label: 'Pony',
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
    }
  }),
});
