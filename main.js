var hamburger = $('.hamburger-menu');
var open = $('.header-right > a');
var close = $('.hamburger-menu a');

open.click( function () {
    hamburger.fadeIn(500);
})

close.click( function () {
    hamburger.fadeOut(500);
})