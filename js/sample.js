require.config({
    baseUrl: 'lib',
    paths: {
        'TweenMax': 'gsap/TweenMax.min',
        'Loading': '../js/lib/Loading'
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