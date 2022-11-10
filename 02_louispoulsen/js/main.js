$(function () {

    //top_banner
    $('.top_banner a>i').on('click', function (e) {
        e.preventDefault();
        $('.top_banner').slideUp();
    });

    // collection itm_sldier
    $('.collection .content .itm_slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });

    $('.collection .top .a_L').on('click', function (e) {
        e.preventDefault();
        $('.collection .top .content .itm_S_01').slick('slickPrev');
    });
    $('.collection .top .a_R').on('click', function (e) {
        e.preventDefault();
        $('.collection .top .content .itm_S_01').slick('slickNext');
    });

    $('.collection .bt .a_L').on('click', function (e) {
        e.preventDefault();
        $('.collection .bt .content .itm_S_02').slick('slickPrev');
    });
    $('.collection .bt .a_R').on('click', function (e) {
        e.preventDefault();
        $('.collection .bt .content .itm_S_02').slick('slickNext');
    });

    // best slider
    $('.best .b_slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.best .left .b_slider_ar').on('click', function (e) {
        e.preventDefault();
        $('.best .b_slider').slick('slickPrev');
    });

    //designer
    $('.designer .dp_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        vertical: true,
        speed: 5000,
        cssEase: "linear",
    })

    //scrollbtn
    $('.scrollbtn i:nth-child(1)').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.scrollbtn i:nth-child(2)').on('click', function () {
        $('html,body').animate({
            scrollTop: 6000
        }, 600);
        return false;
    });

    //반응형
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
    });

    $('.gnb .mbtn').on('click', function () {
        $('.g_bottom>ul').toggleClass('on');
        $('.g_bottom>ul>li>a').next().hide();
    });

    $('.g_bottom>ul>li>a').on('click', function (e) {
        if ($('.g_bottom>ul').hasClass('on')) {
            e.preventDefault();
            console.log(this);
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.g_bottom.on').removeClass('on');
        $('.g_bottom>ul').removeAttr('style')
    });

    $('.best .m_bs_arrow img:nth-child(1)').on('click', function (e) {
        e.preventDefault();
        $('.best .b_slider').slick('slickPrev');
    });
    $('.best .m_bs_arrow img:nth-child(2)').on('click', function (e) {
        e.preventDefault();
        $('.best .b_slider').slick('slickNext');
    });




})//the end
