;(function () {
    'use strict';
    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                startPosition: 1,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function menuToggle(x) {
    x.classList.toggle("change");
}

// add border bottom to sticky nav when page is scrolled down
var header = $("#gtco-main-nav");
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if (scroll == 0)
        header.removeClass("border-bottom");
    else
        header.addClass("border-bottom");
});
