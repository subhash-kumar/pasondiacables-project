$(document).ready(function () {
    $(document).scroll(function () {
        $('.volt-header').toggleClass('nav-up', $(this).scrollTop() > 50);
    });
    $('#homeBanner').owlCarousel({
        items: 1,
        nav: false,
        autoplay: true,
        loop: true,
        autoplayHoverPause: false,
        smartSpeed: 800,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        //disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
    var width = $(window).width();
    //var height = $(window).height();
    if ((width <= 767)) {
        // ------ Scroll till Accordian Panel ----- //
        $('#scrapeType').on('shown.bs.collapse', function () {
            var tabHeight = $('.volt-header').height() + $('.accordian-header').height();
            var panel = $(this).find('.collapse.show');
            $('html, body').animate({
                scrollTop: panel.offset().top - tabHeight - 50
            }, 500);
        });
    } else {

    }
});
$(window).on("load", function (e) {
    // ------ Scroll till Tab Content ----- //
    $('.volt-inner-tabs a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var headerHeight = $('.volt-header').height();
        var panel = $('.sec2-tab-cont').find('.active.show');
        $('html, body').animate({
            scrollTop: panel.offset().top - headerHeight - 50
        }, 500);
    });
    
	$('.segments-tabs a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        var headerHeight = $('.volt-header').height();
        var panel = $('.segments-tab-cont').find('.active.show');
        $('html, body').animate({
            scrollTop: panel.offset().top - headerHeight - 50
        }, 500);
    });
});