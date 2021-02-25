// Header gets shadow on scroll

window.addEventListener('scroll', () => {
    let scroll = this.scrollY;
    let header = document.querySelector('header');

    if (scroll >= 50)
        header.style.boxShadow = '0 2px 10px 5px rgba(0,0,0,0.2)';
    else header.style.boxShadow = 'none';
})


// Click activity for Modules
details = document.querySelectorAll('.module-details');
downs = document.querySelectorAll('.module-summary i');

function module(n) {
    if (details[n].style.height == '0px') {
        details[n].classList.toggle('show');
        downs[n].classList.toggle('rotate');
    } else {
        details[n].classList.toggle('show');
        downs[n].classList.toggle('rotate');
    }
}