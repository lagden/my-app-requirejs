require.config({
    baseUrl: 'lib',
    paths: {
        'jquery': 'jquery',
        'jquery.gsap': 'gsap/jquery.gsap.min',
        'TweenMax': 'gsap/TweenMax.min'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'jquery.gsap': {
            deps: ['jquery']
        }
    }
});

require(['jquery', 'TweenMax', 'jquery.gsap'], function ($, TweenMax) {

    console.log('jQuery version:', $.fn.jquery);
    TweenMax.to($('h1:eq(0)'), 1, {left: 100});
});