'use strict';

require(['lib/gsap/TweenMax.min', 'helpers/Loading'], function(Loading) {
    var doc = window.document,
        loading = new Loading('loading', '.spinner');

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
