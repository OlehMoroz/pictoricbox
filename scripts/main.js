'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* Carousels */

    $('.main-carousel').slick({
        slidesToShow: 6.6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
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

    $('.can-you-mint_carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
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
