'use strict';

/* Carousels */

const popularSwiper = new Swiper(document.getElementById('main-carousel'), {
    slidesPerView: 5.5,
    spaceBetween: 15,
    loop: true,
    autoplay: false,
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        1360: {
            slidesPerView: 3.5,
        },
        1370: {
            slidesPerView: 4.5,
        },
        1390: {
            slidesPerView: 5.5,
        }
    }
});

const illustrationSwiper = new Swiper(document.getElementById('mint-carousel'), {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        1180: {
            slidesPerView: 4,
        },
    }
});

const artistSwiper = new Swiper(document.getElementById('artist-carousel'), {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        1180: {
            slidesPerView: 4,
        },
    }
});

let lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
});

document.addEventListener('DOMContentLoaded', () => {

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