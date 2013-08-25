require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
      , bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    
    // use app here
    console.log(app)
    console.log('Running jQuery %s', $().jquery)
    
    // Bootstrap initialization
    $('.btn').popover({html : true})
    
});
