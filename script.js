if (document.documentElement.clientWidth < 700)
    alert('This website is not mobile responsive yet. Please visit back on desktop.');

let links = document.querySelectorAll('.nav-link');
let anchors = document.querySelectorAll('.anchor');
let anchorsTop = [];
anchors.forEach(anchor => {
    anchorsTop.push(anchor.offsetTop);
})

function findWhich(scr) {
    for (i = 0; i < anchors.length; i++)
        if (anchorsTop[i] <= scr && scr < anchorsTop[i + 1])
            return i;
    return anchors.length - 1
}

// Header gets shadow on scroll
window.addEventListener('scroll', () => {
    let scroll = this.scrollY + 70;
    let header = document.querySelector('header');
    if (scroll >= 50)
        header.style.boxShadow = '0 2px 10px 5px rgba(0,0,0,0.2)';
    else header.style.boxShadow = 'none';

    let n = findWhich(scroll);
    links[n].classList.add('current');
    for (i = 0; i < anchors.length; i++)
        if (i != n)
            links[i].classList.remove('current');

    if (scroll > anchorsTop[1])
        document.querySelector('.upArrow').style.right = '30px';
    else document.querySelector('.upArrow').style.right = '-100px';

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