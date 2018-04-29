/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
       exclude: ['assets/images/**/*']
     }
    // Add options here
  });

  // Bootstrap 3.3.2
  app.import('vendor/AdminLTE/bootstrap/css/bootstrap.min.css');
  // FontAwesome 4.3.0
  // app.import('vendor/AdminLTE/plugins/font-awesome/font-awesome.min.css');
  // Ionicons 2.0.0
  // app.import('vendor/AdminLTE/plugins/ionicons/ionicons.min.css');
  // morris chart
  app.import('vendor/AdminLTE/plugins/morris/morris.css');
  // jvector map
  app.import('vendor/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.css');
  // Date Picker
  app.import('vendor/AdminLTE/plugins/datepicker/datepicker3.css');
  // Daterange picker
  app.import('vendor/AdminLTE/plugins/daterangepicker/daterangepicker-bs3.css');
  // bootstrap wysihtml5 - text editor
  app.import('vendor/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css');
  // Theme style
  app.import('vendor/AdminLTE/dist/css/AdminLTE.min.css');
  // AdminLTE Skins. Choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->
  app.import('vendor/AdminLTE/dist/css/skins/_all-skins.min.css');
  // icheck
  app.import('vendor/AdminLTE/plugins/iCheck/flat/blue.css');


  /*****************************
  ***    Admin LTE Scripts
  ******************************/
  // Admin LTE uses JQ 2.1.3 , Ember CLI uses 1.11.2 for now.

  // Bootstrap 3.3.2 JS
  app.import('vendor/AdminLTE/bootstrap/js/bootstrap.min.js');

  // jQuery UI 1.11.2
  app.import('vendor/AdminLTE/plugins/jQueryUI/jquery-ui-1.11.2.min.js');

  // raphael/2.1.0
  // app.import('vendor/AdminLTE/plugins/raphael/raphael-min.js');

  //  Morris.js charts
  app.import('vendor/AdminLTE/plugins/morris/morris.min.js');

  //  Sparkline charts
  app.import('vendor/AdminLTE/plugins/sparkline/jquery.sparkline.min.js');

  //  jvectormap charts
  app.import('vendor/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js');

  //  jvectormap charts
  app.import('vendor/AdminLTE/plugins/jvectormap/jquery-jvectormap-world-mill-en.js');

  //  jqueryKnob charts
  app.import('vendor/AdminLTE/plugins/jqueryKnob/jquery.knob.js');

  //  daterangepicker
  app.import('vendor/AdminLTE/plugins/daterangepicker/daterangepicker.js');

  //  datepicker
  app.import('vendor/AdminLTE/plugins/datepicker/bootstrap-datepicker.js');

  //  Bootstrap WYSIHTML5
  app.import('vendor/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js');

  //  iCheck
  app.import('vendor/AdminLTE/plugins/iCheck/icheck.min.js');

  //  Slimscroll
  app.import('vendor/AdminLTE/plugins/slimScroll/jquery.slimscroll.min.js');

  //  FastClick
  // app.import('vendor/AdminLTE/plugins/fastclick/fastclick.min.js');


  //  Custom stuff:
  app.import('vendor/socket.io/socket.io.min.js');
  return app.toTree();
};
