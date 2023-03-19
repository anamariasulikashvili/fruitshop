//hamburger menu in responsive
let menu = document.querySelector('.hamburger-menu');
menu.onclick = function(){
    let navBar = document.querySelector('.nav');
    navBar.classList.toggle('active');
}


//hovers on photos
$('.img-1').hover(function(){
    $('.intro-1').toggleClass('contActive')
})
$('.img-2').hover(function(){
    $('.intro-2').toggleClass('contActive')
})
$('.img-3').hover(function(){
    $('.intro-3').toggleClass('contActive')
})
$('.img-4').hover(function(){
    $('.intro-4').toggleClass('contActive')
})
$('.img-5').hover(function(){
    $('.intro-5').toggleClass('contActive')
})
$('.img-6').hover(function(){
    $('.intro-6').toggleClass('contActive')
})