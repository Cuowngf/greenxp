$(document).ready(function () {


    $('.banner-slick').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        arrows: false,
    });

    //
    $('.dichvu-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        arrows: true,
    });

    $('.slick-contrung').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        arrows: true,
        centerMode: true,
    });
});