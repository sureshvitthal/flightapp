(function($) {

    "use strict";

    /* ===========================
    Search Progress
    https://github.com/rendro/easy-pie-chart
    ============================== */

    // Progress Indicator
    var $progress = $('#js-search-progress');

    $progress.easyPieChart({
        animate         : 6000,
        easing          : 'easeOutQuart',
        scaleLength     : 0,
        scaleColor      : false,
        barColor        : '#ffaa06',
        trackColor      : '#1888df',
        lineCap         : 'butt',
        lineWidth       : 66,
        size            : 305,
        rotate          : 0,
        onStep          : function (from, to, percent) {
            $(this.el).find('span').text(Math.round(percent) + '%');
        }
    });

    // TODO: Fire this on search success
    // $progress.data('easyPieChart').stop().setOptions({ animate: { duration: 1000 } }).update(100);




})(jQuery);
