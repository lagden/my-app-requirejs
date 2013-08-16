(function(window) {

    'use strict';

    var doc = window.document;

    // Prototype Loading
    // -------------------------
    function Loading(el, spinner) {
        this.loading = doc.getElementById(el);
        if(this.loading != null)
        {
            var s = this.loading.querySelectorAll(spinner);
            this.spinner = s.length > 0 ? s[0] : null;
            this.animate = TweenMax.fromTo(this.spinner, 1, {
                "backgroundPosition": "0px 0px"
            }, {
                "backgroundPosition": "-210px 0px",
                "ease": SteppedEase.config(7),
                "repeat": -1,
                "paused": true
            });
        }
    }

    Loading.prototype.show = function() {
        if (this.animate.paused)
            this.animate.resume();
        this.loading.className = "loading";
        TweenMax.to(this.loading, 0.5, {
            autoAlpha: 1
        });
    }

    Loading.prototype.hide = function(cb) {
        var that = this;
        TweenMax.to(this.loading, 0.5, {
            autoAlpha: 0,
            onComplete: function() {
                that.animate.pause();
                that.loading.className = "loading hidden";
                if(typeof cb === 'function')
                    cb.call()
            }
        });
    }

    if (typeof define === 'function' && define.amd) {
        define(function () {
            return Loading;
        });
    } else {
        window.Loading = Loading;
    }

})(window);