// Shrink Navbar
window.onscroll = function () {
    var myNavbar = document.getElementById("navbar-snapdiet");
    var myLogo = document.getElementById("logo");

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        myNavbar.style.padding = "20px 8px";
        myLogo.style.width = "45%";
        myNavbar.classList.add("active");

    } else {
        myNavbar.style.padding = "35px 10px";
        myLogo.style.width = "65%";
        myNavbar.classList.remove("active");
    }

    if (document.body.width > 350) {
        myLogo.style.width = "40%";
        toggler.style.top = ".8rem";
    }
};

// Active Navbar on Click
// $(document).ready(function () {
//         $('.nav-item').on('click', function () {
//                 $('.active-link').removeClass('active-link');
//                 $(this).addClass('active-link');
//             }

//         );

//         $('.logo-link').on('click', function () {
//                 $('.active-link').removeClass('active-link');
//             }

//         );
//     }

// );

// Smoothly Scroll
$('.nav-link').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
        var scrollTo = target.offset().top;
        $('body, html').animate({
            scrollTop: scrollTo + 'px'
        }, 800);
    }
});

// Active Navbar on Scrolling
//Default active on home
// $('#about').waypoint(function () {

//     $(".navbar-collapse ul li").children().removeClass("active-scroll");
//     $("#about-link").addClass("active-scroll");

// }, {
//     offset: 101
// });

// $('#whysnapdiet').waypoint(function () {

//     $(".navbar-collapse ul li").children().removeClass("active-scroll");
//     $("#why-link").addClass("active-scroll");

// }, {
//     offset: 101
// });

// $('#feature').waypoint(function () {

//     $(".navbar-collapse ul li").children().removeClass("active-scroll");
//     $("#feature-link").addClass("active-scroll");

// }, {
//     offset: 101
// });

// $('#reviews').waypoint(function () {

//     $(".navbar-collapse ul li").children().removeClass("active-scroll");
//     $("#review-link").addClass("active-scroll");

// }, {
//     offset: 101
// });

// $('#home').waypoint(function () {
//     $(".navbar-collapse ul li").children().removeClass("active-scroll");
//     // $("#home-link").addClass("active-scroll");
// }, {
//     offset: 101
// });

// $('#about').waypoint(function () {
//     $(".to-top").addClass("visible");
// }, {
//     offset: 100
// });

// $('#home').waypoint(function (event, direction) {
//     $(".to-top").removeClass("visible");
// }, {
//     offset: 30
// });


$(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
        $('.scroll-top:hidden').stop(true, true).fadeIn();
    } else {
        $('.scroll-top').stop(true, true).fadeOut();
    }
});
$(function () {
    $(".scroll").click(function () {
        $("html,body").animate({
            scrollTop: $("#home").offset().top
        }, "1000");
        return false
    })
})