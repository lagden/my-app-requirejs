require.config({
    baseUrl: 'js',
    paths: {
        'TweenMax': 'lib/gsap/TweenMax.min',
        'jquery': 'lib/jquery',
        'jquery.gsap': 'lib/gsap/jquery.gsap.min'
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