// RIGHT-MENU///////////////////////////////
let rightMenu = document.querySelector('.right-menu');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__btn')) {
        rightMenu.classList.toggle('right-menu--active');
    }

    if (e.target.classList.contains('right-menu__close')) {
        rightMenu.classList.remove('right-menu--active');
    }
});


// SWIPER///////////////////////////////////////////////
let swiper = new Swiper(".top__slider", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".top__slider-pagination",
        clickable: true,
    },
});
