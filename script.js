window.addEventListener('scroll', function () {
    let navbar = document.getElementById('navbar');
    let header = document.querySelector('header');
    let headerHeight = header.offsetHeight;

    if (window.scrollY >= headerHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
