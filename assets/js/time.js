$(document).ready(function() {

// Global Vars
  var oddSecond = ' ';
  var oddMinute = ' ';
  var halfSecond = ' ';
  var halfMinute = ' ';
  var halfHour = ' ';

// Update time
  function update() {
    var quarter = moment().quarter();
    var momentSecond = moment().second();
    var momentMinute = moment().minute();
    var momentHour= moment().format('h').toLowerCase();
    var momentDay = moment().format('dddd').toLowerCase();
    var momentMonth = moment().format('MMMM').toLowerCase();
    var momentYear = moment().format('YYYY').toLowerCase();
    var momentAMPM = moment().format('A').toLowerCase();

    function oddOrEvenS(momentSecond){
      if(momentSecond % 2 === 0) {oddSecond = 'oddS';}
      else {oddSecond = 'evenS';}
    }

    function oddOrEvenM(momentMinute){
      if(momentMinute % 2 === 0) {oddMinute = 'evenM';}
      else {oddMinute = 'oddM';}
    }

    function checkHalfSecond(momentSecond){
      if(momentSecond < 25) {halfSecond = 'quarterS';}
      else if (momentSecond < 50) {halfSecond = 'halfS';}
      else if (momentSecond < 75) {halfSecond = 'threequarterS';}
      else {halfSecond = 'fullS';}
    }

    function checkHalfMinute(momentMinute){
      if(momentMinute < 15) {halfMinute = 'quarterM';}
      else if(momentMinute < 30){halfMinute = 'halfM';}
      else if(momentMinute < 45){halfMinute = 'threequatersM';}
      else {halfMinute = 'fullM';}
    }

    function checkHalfHour(momentHour){
      if(momentHour < 6) {halfHour = 'dawnHour';}
      else if(momentHour < 7){halfHour = 'morningHour';}
      else if(momentHour< 12){halfHour = 'afternoonHour';}
      else if(momentHour< 21){halfHour = 'nightHour';}
      else {halfHour = 'fullHour';}
    }

    // Check if odd, even, quaterpast
    oddOrEvenS(momentSecond);
    checkHalfSecond(momentSecond);
    oddOrEvenM(momentMinute);
    checkHalfMinute(momentMinute);

    var timeAll = ['s' + momentSecond, 'm' + momentMinute, 'h' + momentHour, momentAMPM, momentDay, momentMonth, 'y' + momentYear, oddSecond, oddMinute, halfSecond, halfMinute];
    var timeClass = timeAll.join(' ');

    // Add classes
    $('body').attr('class', timeClass);

    // Add format
    $('.time').html(moment().format('dddd D MMMM YYYY h:mm:ss A'));
  };

  var intervalId = setInterval(update, 100);
  intervalId

// Add pause
  $('button#pause').click(function(){
    clearInterval(intervalId);
    $('textarea#timeClasses').show();
  });

});
