function initializeSlickCarousel(selector, rtl = false) {
    $(selector).slick({
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        autoplaySpeed: 2000,
        prevArrow: '',
        nextArrow: '',
        rtl: rtl,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
}

$(document).ready(function () {
    initializeSlickCarousel('.autoplay-top');
    initializeSlickCarousel('.autoplay-bottom', true);
});
