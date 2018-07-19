
$(document).ready(function(){

  $('#nav-bar button').on('click', function() {
    $('.new-tweet').slideToggle('slow');
    $('.new-tweet textarea').focus();
  });
});