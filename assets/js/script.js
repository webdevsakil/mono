// mobile nav
const menuArea = document.querySelector('.menu-area');
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
mobileMenu.addEventListener("click", function () {
    menuArea.classList.toggle("menu-area-visible")
    mobileMenuClose.classList.toggle("menu-close-icon-visible")
})
mobileMenuClose.addEventListener("click", function () {
    menuArea.classList.toggle("menu-area-visible")
    mobileMenuClose.classList.toggle("menu-close-icon-visible")
})
var slider = tns({
    container: '.hero-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    swipeAngle: true
});
var testimonialSlider = tns({
    container: '.testimonials',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    navContainer: ".testimonial-nav-controls",
    mouseDrag: true,
    autoplayButtonOutput: false,
    swipeAngle: true
});
var logoSlider = tns({
    container: '.logo-slider ul',
    items: 5,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    swipeAngle: true,
    responsive: {
  
        300: {
            gutter: 20,
            items: 2
        },
        640: {
            gutter: 20,
            items: 3
        },
        700: {
            gutter: 3
        },
        900: {
            items: 6
        }
    }
});