require.config({
    baseUrl: '.',
    paths: {
        'TweenMax': 'js/lib/gsap/TweenMax.min',
        'Loading': 'js/helpers/Loading'
    },
    shim: {
        'Loading': {
            deps: ['TweenMax']
        }
    }
});

require(['Loading'], function(Loading) {

    var doc = window.document;
    var loading = new Loading('loading', '.spinner');
    loading.show();

    setTimeout(function() {
        loading.hide(function() {
            var fragment = doc.createDocumentFragment(),
                elem     = doc.createElement('h1'),
                content  = doc.createTextNode('Aweesomeee!!');
            elem.appendChild(content);
            fragment.appendChild(elem);
            doc.body.appendChild(fragment);
        });
    }, 2000);

});