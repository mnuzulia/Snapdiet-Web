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

    if (document.body.width >= 350) {
        myLogo.style.width = "40%";
        toggler.style.top = ".2rem";
    }
};


// Animate X
var button = document.getElementById('nav-toggler'),
    span = button.getElementsByTagName('span')[0];

button.onclick = function () {
    span.classList.toggle('snapdiet-button-close');
};

$('#nav-toggler').on('click', toggleOnClass);

function toggleOnClass(event) {
    var toggleElementId = '#' + $(this).data('toggle'),
        element = $(toggleElementId);

    element.toggleClass('on');


}

// Close toogle when click link
$('.navbar-nav li a').on("click", function () {
    $('.navbar-toggler').click();
});


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