$(document).ready(function () {
	bsCustomFileInput.init();						
    $(".volt-innner .volt-header").addClass("nav-up");
    var width = $(window).width();
    //var height = $(window).height();
    if ((width >= 767)) {
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $(".scrollToTop").fadeIn() : $(".scrollToTop").fadeOut();
        }), $(".scrollToTop").click(function () {
            return $("html, body").animate({
                scrollTop: 0,
            }, 800), !1;
        });
    } else {
        $(".scrollToTop").hide();
    }
});
$(window).on("load", function (e) {
    AOS.init({
        easing: 'ease-out-in',
        duration: 1000,
        disable: function () {
            var maxWidth = 767;
            return window.innerWidth < maxWidth;
        }
    });
})

// activ Menu

// Toggle Hamburger Menu
function openNav() {
    $(".volt-sidenav").css("left", "0");
    $(".volt-overlay").fadeIn();
    $("body").css("overflow", "hidden");
}
function closeNav() {
    $(".volt-sidenav").css("left", "-280px");
    $(".volt-overlay").fadeOut();
    $("body").css("overflow", "auto");
}