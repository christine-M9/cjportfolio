$(document).ready(function () {

    // ================= SCROLL EFFECTS =================
    $(window).scroll(function () {

        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // ================= SCROLL TO TOP =================
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // ================= TYPING ANIMATION =================
    new Typed(".tt", {
        strings: ["Hey, my name is"],
        typeSpeed: 100,
        loop: false
    });

    const typingOptions = {
        strings: [
            "Software Engineer.",
            "Full Stack Developer.",
            "Database Administrator.",
            "Data Analyst.",
            "Freelancer."
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };

    new Typed(".typing", typingOptions);
    new Typed(".typing-2", typingOptions);

    // ================= MOBILE MENU =================
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");

        if ($('.navbar .menu').hasClass('active')) {
            $('.menu-btn i').removeClass('fa-bars').addClass('fa-times');
        } else {
            $('.menu-btn i').removeClass('fa-times').addClass('fa-bars');
        }
    });

    // Close menu when link is clicked
    $('.navbar .menu li a').click(function () {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass('fa-times').addClass('fa-bars');
    });

    // ================= CAROUSEL =================
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

});