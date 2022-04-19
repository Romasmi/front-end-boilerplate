/*
(function( $ ) {
    $.fn.lazyLoadScript = function() {
        return this.each(function (){
            const _this = this;
            const timeout = (this.data('timeout') !== undefined) ? parseInt(this.data('timeout')) : 2000;
            setTimeout(function() {
                _this.append($("<script />", {
                    src: _this.data('script')
                }));
            }, timeout);
        });
    };
})(jQuery);
*/

function lazyLoadImage(lazySelector)
{
    const observer = lozad(lazySelector, {
        threshold: 0.1,
        enableAutoReload: true
    });
    observer.observe();
}

