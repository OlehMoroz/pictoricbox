'use strict';

export function addMainCarouselitem() {
    class CarouselMain {
        constructor(text, src, alt, altartist, srcartist, artistname, parentSelector) {
            this.text = text;
            this.src = src;
            this.alt = alt;
            this.srcartist = srcartist;
            this.altartist = altartist;
            this.artistname = artistname;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.className = "main-carousel-item";
            element.innerHTML = `
                    <div class="slide-text">${this.text}</div>
                    <div class="artist-item">
                        <div class="artist-img">
                            <img src=${this.src} alt=${this.alt}>
                        </div>
                        <div class="artist-name">
                            ${this.artistname}
                        </div>
                    </div>
                    <div class="main-carousel-illustration">
                        <img src=${this.srcartist} alt=${this.altartist} loading="lazy">
                    </div>`;
            this.parent.append(element);
        }
    }

    const mainIllustrationArray = [{
            slideText: "some text", // slide text
            src: "assets/images/artist-1.webp", // src
            altAttribute: "Yulia Tveritina", // alt attribute image
            altAttibuteArtist: 'Yulia Tveritina', // alt attribute image for artist
            srcArtist: 'assets/images/main-lillustration/main-illustratin-1.webp', // artist image
            artistName: 'Yulia Tveritina' // artist name
        },

        {
            slideText: "some text",
            src: "assets/images/artist-1.webp",
            altAttribute: "Yulia Tveritina",
            altAttibuteArtist: 'Yulia Tveritina',
            srcArtist: 'assets/images/main-lillustration/main-illustratin-2.webp',
            artistName: 'Yulia Tveritina'
        },

        {
            slideText: "some text",
            src: "assets/images/artist-1.webp",
            altAttribute: "Yulia Tveritina",
            altAttibuteArtist: 'Yulia Tveritina',
            srcArtist: 'assets/images/main-lillustration/main-illustratin-3.webp',
            artistName: 'Yulia Tveritina'
        },

        {
            slideText: "some text",
            src: "assets/images/artist-1.webp",
            altAttribute: "Yulia Tveritina",
            altAttibuteArtist: 'Yulia Tveritina',
            srcArtist: 'assets/images/main-lillustration/main-illustratin-4.webp',
            artistName: 'Yulia Tveritina'
        },

        {
            slideText: "some text",
            src: "assets/images/artist-1.webp",
            altAttribute: "Yulia Tveritina",
            altAttibuteArtist: 'Yulia Tveritina',
            srcArtist: 'assets/images/main-lillustration/main-illustratin-5.webp',
            artistName: 'Yulia Tveritina'
        },

        {
            slideText: "some text",
            src: "assets/images/artist-1.webp",
            altAttribute: "Yulia Tveritina",
            altAttibuteArtist: 'Yulia Tveritina',
            srcArtist: 'assets/images/main-lillustration/main-illustratin-6.webp',
            artistName: 'Yulia Tveritina'
        },

        {
            slideText: "some text",
            src: "assets/images/artist-1.webp",
            altAttribute: "Yulia Tveritina",
            altAttibuteArtist: 'Yulia Tveritina',
            srcArtist: 'assets/images/main-lillustration/main-illustratin-7.webp',
            artistName: 'Yulia Tveritina'
        },

        {
            slideText: "some text",
            src: "assets/images/artist-1.webp",
            altAttribute: "Yulia Tveritina",
            altAttibuteArtist: 'Yulia Tveritina"',
            srcArtist: 'assets/images/main-lillustration/main-illustratin-8.webp',
            artistName: 'Yulia Tveritina'
        },

        {
            slideText: "some text",
            src: "assets/images/artist-1.webp",
            altAttribute: "Yulia Tveritina",
            altAttibuteArtist: 'Yulia Tveritina',
            srcArtist: 'assets/images/main-lillustration/main-illustratin-9.webp',
            artistName: 'Yulia Tveritina'
        },
    ];

    for (let i = 0; i < mainIllustrationArray.length; i++) {

        new CarouselMain(
            mainIllustrationArray[i].slideText,
            mainIllustrationArray[i].src,
            mainIllustrationArray[i].altAttribute,
            mainIllustrationArray[i].altAttibuteArtist,
            mainIllustrationArray[i].srcArtist,
            mainIllustrationArray[i].artistName,
            "#main-carousel",
        ).render();
    }

}


export function addMintCarouselitem() {
    class CarouselCanYouMint {
        constructor(src, alt, artistname, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.artistname = artistname;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.className = "can-you-mint_item";
            element.innerHTML = `
                    <div class="can-you-mint-image">
                            <img src="${this.src}" alt="${this.alt}" loading="lazy">
                        </div>
                        <div class="can-you-mint-name">
                        ${this.artistname}
                       </div>`;
            this.parent.append(element);
        }
    }

    const carouselCanYouMintArray = [{
            src: "assets/images/illustration/mint-illustration-1.webp", // src image
            altAttibute: "can-you-mint", // alt attribute imge
            imageName: 'Artwork #1 by E. Tikhonyukv' // illustration or image name
        },

        {
            src: "assets/images/illustration/mint-illustration-2.webp",
            altAttibute: "can-you-mint",
            imageName: 'Artwork #1 by E. Tikhonyukv'
        },
        {
            src: "assets/images/illustration/mint-illustration-3.webp",
            altAttibute: "can-you-mint",
            imageName: 'Artwork #1 by E. Tikhonyukv'
        },
        {
            src: "assets/images/illustration/mint-illustration-4.webp",
            altAttibute: "can-you-mint",
            imageName: 'Artwork #1 by E. Tikhonyukv'
        },
        {
            src: "assets/images/illustration/mint-illustration-5.webp",
            altAttibute: "can-you-mint",
            imageName: 'Artwork #1 by E. Tikhonyukv'
        },
        {
            src: "assets/images/illustration/mint-illustration-6.webp",
            altAttibute: "can-you-mint",
            imageName: 'Artwork #1 by E. Tikhonyukv'
        }
    ];

    for (let i = 0; i < carouselCanYouMintArray.length; i++) {

        new CarouselCanYouMint(
            carouselCanYouMintArray[i].src,
            carouselCanYouMintArray[i].altAttribute,
            carouselCanYouMintArray[i].imageName,
            "#mint-carousel",
        ).render();
    }
}

export function addArtistCarouselitem() {
    class CarouselCanYouMintArtist {
        constructor(src, alt, artistname, facebook, behance, instagram, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.artistname = artistname;
            this.facebook = facebook;
            this.behance = behance;
            this.instagram = instagram;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.className = "can-you-mint_item";
            element.innerHTML = `

            <div class="can-you-mint-image artist-carousel-image">
                <img src="${this.src}" alt="${this.alt}" loading="lazy">
            </div>
            <div class="can-you-mint-name artist-name-row">
                <div class="artist-name">
                    ${this.artistname}
                </div>
                <div class="artist-social">
                    <a href="${this.facebook}">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#artist-facebook"></use>
                        </svg>
                    </a>
                    <a href="${this.behance}">
                        <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#artist-behance"></use>
                        </svg>
                    </a>
                    <a href="${this.instagram}">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#artist-instagram"></use>
                        </svg>
                    </a>
                </div>
            </div>`;
            this.parent.append(element);
        }
    }

    const carouselCanYouMintArtist = [{
            src: "assets/images/artists/artist-1.webp", // src image
            altAttribute: "slide-artist-mint", // alt attribute image
            artistName: 'Olena Tykhoniuk', // artist name
            facebook: '#', // facebook link
            behance: '#', // becance link
            instagram: '#' // instagram link
        },
        {

            src: "assets/images/artists/artist-2.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {
            src: "assets/images/artists/artist-3.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-4.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-5.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-6.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-7.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-8.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-9.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-10.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-11.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-12.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-13.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-14.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'
        },
        {


            src: "assets/images/artists/artist-15.webp",
            altAttribute: "slide-artist-mint",
            artistName: 'Olena Tykhoniuk',
            facebook: '#',
            behance: '#',
            instagram: '#'

        }

    ];

    for (let i = 0; i < carouselCanYouMintArtist.length; i++) {

        new CarouselCanYouMintArtist(
            carouselCanYouMintArtist[i].src,
            carouselCanYouMintArtist[i].altAttribute,
            carouselCanYouMintArtist[i].artistName,
            carouselCanYouMintArtist[i].facebook,
            carouselCanYouMintArtist[i].behance,
            carouselCanYouMintArtist[i].instagram,
            "#artist-carousel",
        ).render();
    }
}