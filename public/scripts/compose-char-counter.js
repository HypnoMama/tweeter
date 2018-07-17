$(document).ready(function() {
  const counter = $('.counter')[0];
  const counterBlack = $('.counter');
  const counterRed = $('.counterRed')
  const textarea = $('textarea')
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

