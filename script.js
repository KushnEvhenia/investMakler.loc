if(window.jQuery !== undefined){
    $(document).ready(function(){
        $('.slider-holder').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $('.prev-btn'),
            nextArrow: $('.next-btn'),   
        });
        $('.slider .container-fluid .row').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true
        });
    });
}
if(typeof Fancybox == 'function'){
    Fancybox.bind("[data-fancybox]", {
    
    });
}
let menu = document.querySelector('.nav-dropdown');
let closeMenu = document.querySelector(".close-menu");
let scrollBtn = document.querySelector('.scroll-to-top');
let rootElement = document.documentElement;
let searchBtnDesktop = document.querySelector('.search-btn-desktop');
let closeBtnDesktop = document.querySelector('.close-btn-desktop');
let searchBtn = document.querySelector('.search-btn');
let closeBtn = document.querySelector('.close-btn');
searchBtnDesktop.addEventListener('click', function(){
    searchBtnDesktop.style.display = 'none';
    document.querySelector('.search-field-desktop').style.display = 'block';
    closeBtnDesktop.style.display = 'block';
    document.querySelector('.header-button').style.display = 'none';
});
closeBtnDesktop.addEventListener('click', function(){
    searchBtnDesktop.style.display = 'block';
    document.querySelector('.search-field-desktop').style.display = 'none';
    closeBtnDesktop.style.display = 'none';
    document.querySelector('.header-button').style.display = 'block';
});
searchBtn.addEventListener('click', function(){
    document.querySelector('.search-field').style.display = 'block';
    searchBtn.style.display = 'none';
    document.querySelector('.header-logo').style.display = 'none';
    document.querySelector('.search-field').style.display = 'block';
    document.querySelector('.frame').style.gap = '10px';
    closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click', function(){
    searchBtn.style.display = 'block';
    document.querySelector('.header-logo').style.display = 'block';
    document.querySelector('.search-field').style.display = 'none';
    document.querySelector('.frame').style.gap = '40px';
    closeBtn.style.display = 'none';
});
menu.addEventListener('click', function(){
    document.querySelector(".dropdown-mobile").style.display ='block';
    document.querySelectorAll("footer")[1].style.display ='none';
    document.querySelector(".main").style.display ='none';
    document.querySelector("body").style.overflow ='hidden';
    menu.style.display = "none";
    closeMenu.style.display = "block";
    if(document.querySelector(".progressbar") !== null){
        document.querySelector(".progressbar").style.display = 'none';
    }
});
closeMenu.addEventListener('click', function(){
    document.querySelector(".dropdown-mobile").style.display ='none';
    document.querySelectorAll("footer")[1].style.display ='block';
    document.querySelector(".main").style.display ='block';
    document.querySelector("body").style.overflow ='visible';
    menu.style.display = "block";
    closeMenu.style.display = "none";
    if(document.querySelector(".progressbar") !== null){
        document.querySelector(".progressbar").style.display = 'block';
    }
});
if(scrollBtn !== null){
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 1601 || document.documentElement.scrollTop > 1601) {
          scrollBtn.style.display = 'inline-flex';
        } 
        else{
          scrollBtn.style.display = 'none';
        }
    }        
    scrollBtn.addEventListener('click', function(){
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

