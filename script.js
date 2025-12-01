$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) { // Fixed typo: this.scroll -> this.scrollY
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up button click behavior
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // Typing animation script
    var typed = new Typed(".tt", {
        strings: ["Hey, my name is"],
        typeSpeed: 100,
        loop: false
    });

    var options = {
        strings: ["Software Engineer.", "Full Stack Developer.","Database Administrator.", "Data Analyst.",  "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };
    new Typed(".typing", options);
    new Typed(".typing-2", options); // Consolidated configuration

    // Toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});