$(document).ready(function() {


// Add jQuery here







  var audioBell = document.createElement('audio');
  audioBell.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
  $.get();
  audioBell.addEventListener("load", function() {
    audioBell.play();
  }, true);

  var audioHorn = document.createElement('audio');
  audioHorn.setAttribute('src', 'https://www.soundjay.com/misc/hohner-melodica-1.mp3');
  $.get();
  audioHorn.addEventListener("load", function() {
    audioHorn.play();
  }, true);





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
