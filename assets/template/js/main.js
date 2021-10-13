$(function () {
    lazyLoad('.lazy');
    loadMap('#mapContainer');

    $('.lazy-load-script').each(function () {
        $(this).lazyLoadScript();
    });

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

function loadMap(mapContainerSelector)
{
    let mapContainer = $(mapContainerSelector);
    setTimeout(function () {
        mapContainer.html(mapContainer.data('map'));
        mapContainer.children('.preloader').hide();
    }, 2000);
}

function lazyLoad(lazySelector)
{
    const observer = lozad(lazySelector, {
        threshold: 0.1,
        enableAutoReload: true
    });
    observer.observe();
}

(function( $ ) {

    $.fn.lazyLoadScript = function() {
        const _this = this;
        const timeout = (this.data('timeout') !== undefined) ? parseInt(this.data('timeout')) : 2000;
        setTimeout(function() {
            _this.append($("<script />", {
                src: _this.data('script')
            }));
        }, timeout);
    };
})(jQuery);