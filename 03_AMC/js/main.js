$(function () {
    //main_visual
    $('.main_visual').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });

    //site_map
    let siteMap = $('.gnb_wrapper>ul')
        .clone()
        .addClass('container')
        .appendTo($('.hd_top'))
        .wrap('<section class="sitemap"></section>');
    $('<a><i class="xi-close"></i></a>').appendTo(siteMap.parent()); // appendTo(el) el의 마지막 자식으로 추가


    $('.site_map').on('click', function (e) {
        e.preventDefault();
        $('.sitemap').show()
    });

    $('.sitemap .xi-close').on('click', function (e) {
        e.preventDefault();
        $('.sitemap').slideUp()
    });

    // box_menu 
    // bm_mid > bm_slide_left
    $('.box_menu .bm_mid .bm_slide_left').slick({
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
    });

    $('.bm_mid .bm_left_ar a:nth-child(1)').on('click', function () {
        $('.bm_slide_left').slick('slickPrev');
    });
    $('.bm_mid .bm_left_ar a:nth-child(2)').on('click', function () {
        $('.bm_slide_left').slick('slickNext');
    });

    // bm_mid > bm_slide_right
    $('.box_menu .bm_mid .bm_slide_right').slick({
        arrows: false,
        infinite: true,
        fade: true,
        dots: true,
        autoplay: true,
    });

    //mobile size
    $('.mbtn').on('click', function () {
        $('.mbtn').toggleClass('on');
        $('.gnb').toggleClass('on');
        $('.depth01>li>a').next().hide();
    });

    $('.gnb .depth01>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            console.log(this);
            $(this).next().stop().slideToggle();
            // $(this).parent().siblings().find('div').stop().slideUp();
        }
    })

    $(window).on('resize', function () {
        $('.gnb.on').removeClass('on');
        $('.gnb>ul').removeAttr('style')
    });



});//the end

