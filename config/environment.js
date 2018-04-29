/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dashboard',
    podModulePrefix: 'dashboard/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyAHui9RM1KsNPjnO3lqINpX3vufsQYiQL8",
      authDomain: "diabuddy-80d53.firebaseapp.com",
      databaseURL: "https://diabuddy-80d53.firebaseio.com",
      projectId: "diabuddy-80d53",
      storageBucket: "diabuddy-80d53.appspot.com",
      messagingSenderId: "867145684082"
    },
    mapbox: {
      accessToken: 'pk.eyJ1Ijoic3Jvd2hhbmkiLCJhIjoiY2plbmNqMjdzMHd3MTJxcGl5dWY2bXZseiJ9.nbkuawnxrUglF-qbzW-kYQ'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash'
    ENV.rootURL = '/dashboard'
    // here you can enable a production-specific feature
  }

  return ENV;
};
