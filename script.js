window.onscroll = function() {
    const header = document.querySelector('.header');
    const sticky = header.offsetTop;
    
    if (window.pageYOffset > sticky) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};
