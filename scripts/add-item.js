'use strict';

export function addMainCarouselitem() {
    class CarouselMain {
        constructor(src, alt, altartist, srcartist, artistname, parentSelector) {
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

    new CarouselMain(
        "assets/images/artist-1.webp",
        "Yulia Tveritina",
        'Yulia Tveritina"',
        'assets/images/illustration-1.webp',
        'Yulia Tveritina"',
        "#main-carousel"
    ).render();

    new CarouselMain(
        "assets/images/artist-1.webp",
        "Yulia Tveritina",
        'Yulia Tveritina"',
        'assets/images/illustration-1.webp',
        'Yulia Tveritina"',
        "#main-carousel"
    ).render();

    new CarouselMain(
        "assets/images/artist-1.webp",
        "Yulia Tveritina",
        'Yulia Tveritina"',
        'assets/images/illustration-1.webp',
        'Yulia Tveritina"',
        "#main-carousel"
    ).render();

    new CarouselMain(
        "assets/images/artist-1.webp",
        "Yulia Tveritina",
        'Yulia Tveritina"',
        'assets/images/illustration-1.webp',
        'Yulia Tveritina"',
        "#main-carousel"
    ).render();

    new CarouselMain(
        "assets/images/artist-1.webp",
        "Yulia Tveritina",
        'Yulia Tveritina"',
        'assets/images/illustration-1.webp',
        'Yulia Tveritina"',
        "#main-carousel"
    ).render();

    new CarouselMain(
        "assets/images/artist-1.webp",
        "Yulia Tveritina",
        'Yulia Tveritina"',
        'assets/images/illustration-1.webp',
        'Yulia Tveritina"',
        "#main-carousel"
    ).render();

    new CarouselMain(
        "assets/images/artist-1.webp",
        "Yulia Tveritina",
        'Yulia Tveritina"',
        'assets/images/illustration-1.webp',
        'Yulia Tveritina"',
        "#main-carousel"
    ).render();
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

    new CarouselCanYouMint(
        "assets/images/mint-illustration-1.webp",
        "can-you-mint",
        'Artwork #1 by E. Tikhonyukv',
        "#mint-carousel"
    ).render();

    new CarouselCanYouMint(
        "assets/images/mint-illustration-1.webp",
        "can-you-mint",
        'Artwork #1 by E. Tikhonyukv',
        "#mint-carousel"
    ).render();

    new CarouselCanYouMint(
        "assets/images/mint-illustration-1.webp",
        "can-you-mint",
        'Artwork #1 by E. Tikhonyukv',
        "#mint-carousel"
    ).render();

    new CarouselCanYouMint(
        "assets/images/mint-illustration-1.webp",
        "can-you-mint",
        'Artwork #1 by E. Tikhonyukv',
        "#mint-carousel"
    ).render();

    new CarouselCanYouMint(
        "assets/images/mint-illustration-1.webp",
        "can-you-mint",
        'Artwork #1 by E. Tikhonyukv',
        "#mint-carousel"
    ).render();
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

    new CarouselCanYouMintArtist(
        "assets/images/slide-artist-1.webp",
        "slide-artist-mint",
        'Olena Tykhoniuk',
        '#',
        '#',
        '#',
        "#artist-carousel"
    ).render();

    new CarouselCanYouMintArtist(
        "assets/images/slide-artist-1.webp",
        "slide-artist-mint",
        'Olena Tykhoniuk',
        '#',
        '#',
        '#',
        "#artist-carousel"
    ).render();

    new CarouselCanYouMintArtist(
        "assets/images/slide-artist-1.webp",
        "slide-artist-mint",
        'Olena Tykhoniuk',
        '#',
        '#',
        '#',
        "#artist-carousel"
    ).render();

    new CarouselCanYouMintArtist(
        "assets/images/slide-artist-1.webp",
        "slide-artist-mint",
        'Olena Tykhoniuk',
        '#',
        '#',
        '#',
        "#artist-carousel"
    ).render();

    new CarouselCanYouMintArtist(
        "assets/images/slide-artist-1.webp",
        "slide-artist-mint",
        'Olena Tykhoniuk',
        '#',
        '#',
        '#',
        "#artist-carousel"
    ).render();

    new CarouselCanYouMintArtist(
        "assets/images/slide-artist-1.webp",
        "slide-artist-mint",
        'Olena Tykhoniuk',
        '#',
        '#',
        '#',
        "#artist-carousel"
    ).render();
}