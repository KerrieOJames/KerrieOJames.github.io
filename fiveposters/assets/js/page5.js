$(document).ready(function() {


// Add jQuery here



$(function() {
  $('.luminaire:nth-child(2n)').addClass('on');
  $('.luminaire').on('click', function() {
    $(this).toggleClass('on');
  });
});

$(function() {
  $('.luminaire:nth-child(2n)').removeclass('on');
  $('.luminaire').off('click', function() {
    $(this).toggleClass('off');
  });
});




  });
