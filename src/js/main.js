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
