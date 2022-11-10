$(function () {
    //main_visual
    $('.main_visual .main_slider').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
    });

    $('.main_visual .main_slider').on('afterChange', function (e, s, c) {
        console.log(c);
        $('.main_dots li').removeClass('on')
        $('.main_dots li').eq(c).addClass('on');
    })

    $('.main_dots li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.main_slider').slick('slickGoTo', idx)
    });

    //best_seller
    $('.bs_slider .container').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.best_seller .bs_arrows i:nth-child(1)').on('click', function (e) {
        e.preventDefault();
        $('.bs_slider .container').slick('slickPrev');
    });
    $('.best_seller .bs_arrows i:nth-child(2)').on('click', function (e) {
        e.preventDefault();
        $('.bs_slider .container').slick('slickNext');
    });

    //seasonal_gift
    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue)

        if (scrollValue >= 1900) {
            $('.seasonal_gift .sg_top .sg_img').addClass('on');
        } else {
            $('.seasonal_gift .sg_top .sg_img').removeClass('on');
        };

        if (scrollValue >= 2500) {
            $('.seasonal_gift .sg_bottom .sg_img').addClass('on');
        } else {
            $('.seasonal_gift .sg_bottom .sg_img').removeClass('on');
        };

        if (scrollValue >= 500) {
            $('.scrollbtn').addClass('on');
        } else {
            $('.scrollbtn').removeClass('on');
        }

    });

    $('.seasonal_gift .sg_top .sg_txt .pd>div>a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('.seasonal_gift .sg_top .sg_txt .pd>ul').toggleClass('on');
    })
    $('.seasonal_gift .sg_bottom .sg_txt .pd>div>a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('.seasonal_gift .sg_bottom .sg_txt .pd>ul').toggleClass('on');
    })

    //scroll_top
    $('.scrollbtn i:nth-child(1)').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    //반응형
    $('.mbtn').on('click', function () {
        $('.mbtn').toggleClass('on');
        $('.gnb').toggleClass('on');
        $('.gnb>ul>li>a').next().hide();
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.gnb.on').removeClass('on');
        $('.gnb>ul').removeAttr('style')
    });


    $(window).resize(function () {
        if ($(window).width() < 768) {
            $(window).scroll(function () {
                var scrollValue = $(document).scrollTop();
                console.log(scrollValue)

                if (scrollValue >= 1300) {
                    $('.seasonal_gift .sg_top .sg_img').addClass('on');
                } else {
                    $('.seasonal_gift .sg_top .sg_img').removeClass('on');
                };

                if (scrollValue >= 1900) {
                    $('.seasonal_gift .sg_bottom .sg_img').addClass('on');
                } else {
                    $('.seasonal_gift .sg_bottom .sg_img').removeClass('on');
                };
            });
        }
    });
})//the end