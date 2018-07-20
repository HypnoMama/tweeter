/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){

  const tweets = [];


  function createTweetElement(data){
    let name = data.user.name;
    let handle = data.user.handle;
    let avatar = data.user.avatars.small;
    let content = data.content.text;
    let createdAt = data.created_at;
    let dateCreated = new Date(createdAt);

    let $span = $('<span>').attr('id', 'handle');
    let $image = $('<img>').attr('src', avatar);
    let $text = $('<p>');
    let $footer = $('<footer>');
    let $spanFooterIcons = $('<span>').attr('id', 'icons');
    let $flag = $('<i>').addClass('fas fa-flag');
    let $retweet = $('<i>').addClass('fas fa-retweet');
    let $heart = $('<i>').addClass('fas fa-heart').attr('data-like', "0");
    let daysAgo = moment(dateCreated).fromNow();

    let $article = $('<article>').addClass('prev-tweet');
    let $header = $('<header>');

    $header.text(name);
    $header.append($image);
    $span.text(handle);
    $header.append($span);
    $footer.text(daysAgo);
    $spanFooterIcons.append($flag).append($retweet).append($heart);
    $footer.append($spanFooterIcons)
    $text.text(content);

    $article.append($header);
    $article.append($text);
    $article.append($footer);

    return $article;
  }

  function renderTweets(aryOfTweetObjs) {
    aryOfTweetObjs.forEach(function(tweet) {
      let newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
    });
  }

  $('form').on('submit', function(event){
    event.preventDefault();
    const body = $(this).serialize();
    const $counter = $('.counter').text();
    const countNum = Number($counter);
    let $input = $('textarea').val();
    const $error = $('#error');
    $error.hide();

    if ($input !== '' && countNum >= 0) {
      $.ajax("/tweets", {
      method: "POST",
      url: "/tweets",
      data: body
    })
      .done(function() {
        $('textarea').val('');
        $('.counter').text('140');
        loadTweets();
      });
    } else if ($input === '') {
      $error.text('You didn\'t enter anything to Tweet. Please add some text before Tweeting!');
      $error.slideDown()
    } else if (countNum <= 0) {
      $error.text('Sorry, your tweet is too long! Please keep it to 140 characters or less.');
      $error.slideDown();
    }
  });



  function loadTweets() {
    $.ajax("/tweets", {
      method: "GET",
      url: "/tweets",
      data: $(this).serialize()
    })
    .done(function(tweets){
      renderTweets(tweets);
    });
  }

  loadTweets();

});



