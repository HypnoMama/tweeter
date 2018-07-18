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
    let currentDate = new Date();

    let $span = $('<span>').attr('id', 'handle');
    let $image = $('<img>').attr('src', avatar);
    let $text = $('<p>');
    let $footer = $('<footer>');
    let $spanFooterIcons = $('<span>').attr('id', 'icons');
    let $flag = $('<i>').addClass('fas fa-flag');
    let $retweet = $('<i>').addClass('fas fa-retweet');
    let $heart = $('<i>').addClass('fas fa-heart');
    let daysAgo = moment(dateCreated).fromNow();

    let $article = $('<article>').addClass('prev-tweet');
    let $header = $('<header>');


    $header.text(name);
    $header.append($image);
    $span.text(handle);
    $header.append($span);
    $footer.text(daysAgo);
    $spanFooterIcons.append($flag).append($retweet).append($heart);
    $footer.append($spanFooterIcons)//
    $text.text(content);
    //can refactor to one line
    //let header = $.text().append()
    //look into appendTo()


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
    const $counter = $('.counter').text()



    if (body !== '' && $counter < 0) {
       $.ajax("/tweets", {
      method: "POST",
      url: "/tweets",
      data: body
    })
      .done(function() {
        loadTweets();
      })
    } else {
      alert('The form cannot be empty or greater than 140 characters');
    }


  })

  function loadTweets() {
    //gets tweets from /tweets
    //receives array of tweets as JSON
    $.ajax("/tweets", {
      method: "GET",
      url: "/tweets",
      data: $(this).serialize()
    })

    .done(function(tweets){
      //take body add to tweets at front (prepend???)
      renderTweets(tweets);
    })
  }

  loadTweets()


  //end
});



