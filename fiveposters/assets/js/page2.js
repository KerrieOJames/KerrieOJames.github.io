$(document).ready(function() {


// Add jQuery here

$("trapezoidblue2").click(function () {
         var circle = $(this);
         trapezoidblue2.addClass("animate");

         setTimeout(function () {
     trapezoidblue2.removeClass('animate');
        }, 3000);

   });

   $('trapezoidblue2')
.click (function () {
    $(this).addClass().animate({
        'position' : '(0px -42px)'
    }, 150);
}, function () {
    $(this).removeClass().animate({
        'position' : '(0 0)'
    }, 150);
});

  });

  $('#move')
.hover(function () {
    $(this).stop().animate({
        'background-position' : '(0px -42px)'
    }, 150);
}, function () {
    $(this).stop().animate({
        'background-position' : '(0 0)'
    }, 150);
});
