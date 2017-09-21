$(document).ready(function() {


// Add jQuery here

$('.nav_ad').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.ad').removeClass('hide');
  $('.item.ad').addClass('show');

  $('.nav_clear').addClass('show');
});


$('.nav_plan').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.plan').removeClass('hide');
  $('.item.plan').addClass('show');

  $('.nav_clear').addClass('show');
});


$('.nav_art').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.art').removeClass('hide');
  $('.item.art').addClass('show');

  $('.nav_clear').addClass('show');
});




$('.nav_lights').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.lights').removeClass('hide');
  $('.item.lights').addClass('show');

  $('.nav_clear').addClass('show');
});


$('.nav_sky').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.sky').removeClass('hide');
  $('.item.sky').addclass('show');

  $('.nav_clear').addClass('show');
});


$('.nav_clear').click(function(event){
  $('.nav_clear').addClass('hide');
  $('.nav_clear').removeClass('show');

  $('.item').removeClass('hide');


});



$('.nav_thumbnail').click(function(event) {
  $('.item').addClass('thumbnail');
  });


  $('.nav_large').click(function(event) {
    $('.item').removeClass('thumbnail');
    });















  });
