$(document).ready(function() {


// Add jQuery here





$(function() {
$('.star').click(function(){
    $(this).css('background', 'yellow');

  });
});



  $('.play_bell').click(function() {
    audioBell.play();
  });


  $('.pause_bell').click(function() {
    audioBell.pause();
  });


  $(".hover_horn").hover(
    function() {
      audioHorn.play();
    },
    function() {
      audioHorn.pause();
    }



});
















  });
