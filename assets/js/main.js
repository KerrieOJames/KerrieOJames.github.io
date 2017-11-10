$(document).ready(function() {


// Add jQuery here







$('.animation').mouseenter(function() {
   $('.hovermotion').addClass('showme');
 });



$('.animation').mouseleave(function() {
  $('.hovermotion').removeClass('showme');
});

$('.ice').mouseenter(function() {
   $('.icetext').addClass('showme');
 });



$('.ice').mouseleave(function() {
  $('.icetext').removeClass('showme');
});



$('.waterbody').mouseenter(function() {
   $('.watertext').addClass('showme');
 });



$('.waterbody').mouseleave(function() {
  $('.watertext').removeClass('showme');
});


$('.threepix').mouseenter(function() {
   $('.threetext').addClass('showme');
 });



$('.threepix').mouseleave(function() {
  $('.threetext').removeClass('showme');
});

$('.food').mouseenter(function() {
   $('.octypus').addClass('showme');
 });



$('.food').mouseleave(function() {
  $('.octypus').removeClass('showme');
});




$('.egg').mouseenter(function() {
   $('.grass').addClass('showme');
 });



$('.egg').mouseleave(function() {
  $('.grass').removeClass('showme');
});


$(function(){

    function updateClock(){
        var now = moment(),
            second = now.seconds() * 6,
            minute = now.minutes() * 6 + second / 60,
            hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;

        $('#hour').css("transform", "rotate(" + hour + "deg)");
        $('#minute').css("transform", "rotate(" + minute + "deg)");
        $('#second').css("transform", "rotate(" + second + "deg)");
    }

    function timedUpdate () {
        updateClock();
        setTimeout(timedUpdate, 1000);
    }

    timedUpdate();
})();



//this is where we apply opacity to the arrow
$(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;

  //get height of window
  var windowHeight = $(window).height();

  //set position as percentage of how far the user has scrolled
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});






//Code stolen from css-tricks for smooth scrolling:
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




  });
