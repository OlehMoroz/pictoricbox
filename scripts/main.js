'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* WOW animate */
    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate',
        offset: 10,
        mobile: true,
        live: true
    });

    const wowOffset = new WOW({
        boxClass: 'wow-offset',
        animateClass: 'animate',
        offset: 0,
        mobile: true,
        live: true
    });

    wowOffset.init();
    wow.init();

    /* Carousels */

    $('.main-carousel').slick({
        slidesToShow: 6.6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        speed: 1300,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="carousel-btn prev-btn"></button>',
        nextArrow: '<button class="carousel-btn next-btn"></button>',
        responsive: [{
                breakpoint: 1360,
                settings: {
                    slidesToShow: 5.6,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 4.6,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    autoplay: false,
                    infinite: true,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                    infinite: true,
                    horizontal: true,
                }
            }
        ],
    });

    $('.can-you-mint_carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1300,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="carousel-btn mint-carousel-btn prev-btn"></button>',
        nextArrow: '<button class="carousel-btn mint-carousel-btn next-btn"></button>',
        responsive: [{
                breakpoint: 1360,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    horizontal: true,
                }
            }
        ],
    });

    /* Carousel z-index */

    const carouselItem = document.querySelectorAll('.main-carousel-item'),
        carouseWrap = document.querySelector('.main-carousel-wrap'),
        carouselBtn = document.querySelectorAll('.carousel-btn');

    carouselItem.forEach(item => {
        item.addEventListener('mouseover', () => {
            carouseWrap.style.cssText = 'z-index: 3';
        });
        item.addEventListener('mouseout', () => {
            carouseWrap.style.cssText = 'z-index: 0';
        });
    });

    carouselBtn.forEach(item => {
        item.addEventListener('mouseover', () => {
            carouseWrap.style.cssText = 'z-index: 3';
        });
        item.addEventListener('mouseout', () => {
            carouseWrap.style.cssText = 'z-index: 0';
        });
    });

    /* Moving elemen */

    const htmlElement = document.body,
        moveElement = document.querySelectorAll('.move-element'),
        moveElementTube = document.querySelector('.mint-tube');


    function moving(object, speed) {
        htmlElement.addEventListener('mousemove', event => {
            let X = Math.floor(((event.pageX) / speed - 150) / 10) + 'px';
            let Y = Math.floor(((event.pageY) / speed - 150) / 11) + 'px';

            object.style.transform = `translate(${X}, ${Y})`;
            moveElementTube.style.transform = `translate(${X}, ${Y}) rotate(-13.43deg)`;
        });
    }

    function movingReverse(object, speed) {
        htmlElement.addEventListener('mousemove', event => {
            let X = '-' + Math.floor(((event.pageX) / speed - 150) / 11) + 'px';
            let Y = '-' + Math.floor(((event.pageY) / speed - 150) / 12) + 'px';

            object.style.transform = `translate(${X}, ${Y})`;
        });
    }

    function movingAll(object) {
        if (document.documentElement.clientWidth > 400) {
            moving(object[0], 4);
            movingReverse(object[1], 4);
            movingReverse(object[2], 4);
            moving(object[3], 4);
            movingReverse(object[4], 4);
            moving(object[5], 4);
            moving(object[6], 4);
            movingReverse(object[7], 4);
            movingReverse(object[8], 4);
        }
    }

    movingAll(moveElement);

    /* mobile menu */

    const menuButton = document.querySelector('.mob-menu-button'),
        menuWrap = document.querySelector('.menu-wrap'),
        overflow = document.documentElement;

    menuButton.addEventListener('click', () => {

        if (menuWrap.classList.contains('menu-wrap-active')) {
            menuWrap.classList.remove('menu-wrap-active');
            overflow.classList.remove('overflow-hidden');
            setTimeout(function() {
                menuWrap.classList.toggle('menu-wrap-active-radius');
                menuButton.classList.remove('mob-menu-button-active');
            }, 600);
        } else {
            menuWrap.classList.add('menu-wrap-active-radius');
            menuButton.classList.add('mob-menu-button-active');
            overflow.classList.add('overflow-hidden');
            setTimeout(function() {
                menuWrap.classList.toggle('menu-wrap-active');
            }, 600);
        }

    });

});