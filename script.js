function toggleMenu() {
    var navbarRight = document.querySelector('.navbar-right');
    if (navbarRight.classList.contains('responsive')) {
        navbarRight.classList.remove('responsive');
    } else {
        navbarRight.classList.add('responsive');
    }
}