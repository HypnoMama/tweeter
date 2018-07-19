$(document).ready(function() {
  const counter = $('.counter')[0];
  const counterBlack = $('.counter');
  const counterRed = $('.counterRed')
  const textarea = $('textarea')
  const $error = $('<h5>').attr('id', 'error');
  $('.new-tweet').append($error)

  $(textarea).on('input', function() {
    let keepCount = $(this).val();
    $(counter).text(140 - keepCount.length)
    if(keepCount.length >= 140){
      $(counter).toggleClass('counterRed', true);
    } else {
      $(counter).toggleClass('counterRed', false);
    }
  });
});

