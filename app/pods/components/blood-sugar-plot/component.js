import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

const rand = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

export default Component.extend({
  tagName: '',
  options: computed(function () {
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
      tooltips: {
        enabled: false
      }
    }
  }),
  scatterChartData: computed('bloodSugar', function () {
    const bloodSugar = this.get('bloodSugar');
    var red = '#E24570';
    var blue = '#328FE6';
    var green = '#4CB5B3';
    var yellow = '#F7C344';
    var purple = '#8647FC';

    const generic = (label) => {
      const bgColor = rand();

      return {
        pointStyle: 'circle',
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: bgColor,
        backgroundColor: bgColor,
        backgroundBorderColor: bgColor,
        label
      }
    }

    const byUser = {};
    bloodSugar.forEach(blood => {
      if (!byUser[blood.user.id]) {
        byUser[blood.user.id] = [blood];
      } else {
        byUser[blood.user.id].push(blood);
      }
    })

    const mapped = Object.keys(byUser).map(userKey => byUser[userKey])
      .map(dataForUser => {
        return dataForUser.map(data => {
          return {
            x: moment().hours(0).minutes(0).add(data.timestamp, 'minutes'),
            y: data.data,
            name: data.user.name
          }
        })
      });

    const datasets = mapped.map(item => {
      return Object.assign({
        data: item
      }, generic(item[0].name))
    })
    return {
      datasets,
    }

  }),
});
