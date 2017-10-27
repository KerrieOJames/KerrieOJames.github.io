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







  });
