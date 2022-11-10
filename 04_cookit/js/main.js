window.addEventListener('DOMContentLoaded', () => {
    //top_banner slider
    const TB_SLIDER = new Swiper(".tb_slider", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        direction: "vertical",
    });

    //main_visual slider
    const MainSlider = new Swiper(".main_slider", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });

    //recommend Tab
    const Tab = document.querySelectorAll('.tab_menu li');

    Tab.forEach((el, idx) => {
        el.addEventListener('click', (e) => {
            Tab.forEach(el =>
                el.classList.remove('on'));
            el.classList.add('on');

            const TAB = document.querySelectorAll('.tab_con .rec_menu');
            TAB.forEach(el => el.classList.remove('on'))
            TAB[idx].classList.add('on');
        })
    })

    //best
    const BestSlider = new Swiper('.best_slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 55,
        autoplay: {
            delay: 3000,
        },
        slideActiveClass: 'on',
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 55,
            }
        }
    });

    //event
    const EventSlider = new Swiper(".event_slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });

    //to_top
    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;

        SCT > 600
            ? document.querySelector('.to_top').classList.add('on')
            : document.querySelector('.to_top').classList.remove('on');
    });

    document.querySelector('.to_top').addEventListener('click', function () {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });
    });

    //popup
    console.log(document.cookie);

    const COOKIE = document.cookie;
    if (!COOKIE) {
        document.querySelector('.popup').style.display = 'block';
    }

    document.querySelector('.popup button').addEventListener('click', () => {
        document.querySelector('.popup').style.display = 'none';
    });

    document.querySelector('.popup input').addEventListener('change', () => {
        const date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = "name=popup;" + expires + ";path=/";
        document.querySelector('.popup').style.display = 'none';
    });

    document.querySelector('.popup').addEventListener('wheel', e => {
        e.preventDefault();
    })

    //반응형
    let TOGGLE = true;
    let GNB = document.querySelector('#gnb');
    let SMENU = document.querySelectorAll('.smenu');
    let a = document.querySelectorAll('#gnb>ul>li>a');
    document.querySelector('.mbtn').addEventListener('click', e => {
        TOGGLE ? e.target.classList.add('on') : e.target.classList.remove('on');

        TOGGLE ? GNB.classList.add('on') : GNB.classList.remove('on');
        TOGGLE = !TOGGLE
    });

    a.forEach(it => it.addEventListener('click', function (e) {
        e.preventDefault();
        a.forEach(it => it.classList.remove('on'))
        it.classList.add('on')
    }))

});


