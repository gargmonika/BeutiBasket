// console.log('Basket')

$('.navbar-collapse').on('show.bs.collapse',function(){
    console.log('on showing');
    // $('.description-text').css('visibility','hidden');
    // document.querySelectorAll('.description-text')[0].classList.add('description-text-hide');
})

var navbar = document.querySelector("body>header>nav");
console.log(navbar)
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { 
            navbar.classList.add('nav-bg')
        } 
        else{
            navbar.classList.remove('nav-bg')
        }
    });
});