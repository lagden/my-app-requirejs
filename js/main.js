'use strict';

require.config({
    baseUrl: 'js',
    paths: {
        'TweenMax': '../bower_components/gsap/src/minified/TweenMax.min',
        'jquery.gsap': '../bower_components/gsap/src/minified/jquery.gsap.min',
        'jquery': '../bower_components/jquery/jquery.min'
    },
    shim: {
        'jquery.gsap': ['jquery', 'TweenMax']
    }
});

require(['jquery', 'jquery.gsap'], function($) {
    $('h1:eq(0)').animate({
        left: 100
    }, 1000, function() {
        console.log('jQuery version:', $.fn.jquery);
    });
});