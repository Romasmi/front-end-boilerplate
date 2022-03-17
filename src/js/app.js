//=require ../bower_components/bootstrap/js/dist/dom/event-handler.js
//=require ../bower_components/bootstrap/js/dist/dom/manipulator.js
//=require ../bower_components/bootstrap/js/dist/dom/selector-engine.js
//=require ../bower_components/bootstrap/js/dist/dom/data.js
//=require ../bower_components/bootstrap/js/dist/base-component.js
//=require ../bower_components/bootstrap/js/dist/modal.js
//=require ../bower_components/jquery/dist/jquery.js
//=require ../bower_components/lozad/dist/lozad.js
//=require ../bower_components/lightgallery/dist/js/lightgallery.js
//=require ../bower_components/inputmask/dist/jquery.inputmask.js
//=require ../bower_components/lozad/dist/lozad.js

//=require plugin.js

$(function () {
    lazyLoadImage('.lazy');

    $('.lazy-load-script').lazyLoadScript();

    $('.phone-mask').inputmask('9 (999) 999-99-99');

    $('.gallery').lightGallery({
        download: false,
        selector: '.gallery-item',
        zoom: true,
        youtubePlayerParams: {
            autoplay: 1,
            modestbranding: 1,
            showinfo: 0,
            controls: 0,
            rel: 0
        }
    });

    let $header = $('.header');
    $('.smooth-scroll').on('click', function (event) {
        let hash = this.hash;
        let headerHeight = $header.outerHeight();
        $('html, body').animate({
            scrollTop: $(hash).offset().top - headerHeight * 1.2
        }, 800, function () {
            window.location.hash = hash;
        });
    });
});

