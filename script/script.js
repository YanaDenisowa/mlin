$(document).ready(function() {

    $('.product__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,

        nextArrow: '<button class="slide-arrow prev-arrow"><img src="img/arrow-right-side.png" alt="arrow-right"></button>',
        prevArrow: '<button class="slide-arrow next-arrow"><img src="img/arow-left-side.png" alt="arrow-left"></button>'
    });


    $('.info__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        nextArrow: '<button class="slide-arrow prev-arrow"><img src="img/arrow-right-side.png" alt="arrow-right"></button>',
        prevArrow: '<button class="slide-arrow next-arrow"><img src="img/arow-left-side.png" alt="arrow-left"></button>'
    });


});
