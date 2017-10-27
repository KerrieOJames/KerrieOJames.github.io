$(document).ready(function() {


// Add jQuery here

$('.hoverlights').mouseenter(function() {
   $('.lights').addClass('showme');
 });

 $('.hoverlights').mouseleave(function() {
   $('.lights').removeClass('showme');
 });






 $(document).ready(function(){
    $("img").click(function(){
         $("img").animate({height: "200px"});
     });
 });

 $(document).mouseleave(function(){
    $("img").click(function(){
         $("img").removeClass({height: "200px"});
     });
 });

 


 $('.hoverday').mouseenter(function() {
    $('.days').addClass('showme');
  });

  $('.hoverday').mouseleave(function() {
    $('.days').removeClass('showme');
  });












  });
