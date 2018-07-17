$(document).ready(function() {
  // let count = 140;
  let counterBlack = $('.counter');
  let counterRed = $('.counterRed')
  $('textarea').on('input', function() {
    let keepCount = $(this).val();
    console.log(140 - keepCount.length);
    let parent = $(this).parent('form')[0];
    let span = $(this).closest(parent).find('span')[0]
    console.log(span)
    $(span).text(140 - keepCount.length)
    if(keepCount.length >= 140){
      $(span).toggleClass('counterRed', true);
    } else {
      $(span).toggleClass('counterRed', false);
    }



    // $('.counter').text(count -= 1);
    // if (count <= 0) {
    //   $('.counter').css('color', 'red');
    // }
});


});

