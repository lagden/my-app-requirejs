require.config({
    baseUrl: '.',
    paths: {
        'jquery': 'js/lib/jquery',
        'jquery.gsap': 'js/lib/gsap/jquery.gsap.min',
        'TweenMax': 'js/lib/gsap/TweenMax.min'
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