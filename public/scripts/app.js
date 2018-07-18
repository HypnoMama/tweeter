/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){

  const tweets = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
  ]


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

  // renderTweets(tweets);


    //when the tweet button is pressed
    //create the object
    //add object to array
    //use ajax and jquery
  $('form').on('submit', function(event){ //need to use 'form' as the thing that is submitting, not the input
    //prevents browser from navigating away
    event.preventDefault();
    const body = $(this).serialize();
    console.log(this)
    console.log(body)
      $.ajax("/tweets", {
      method: "POST",
      url: "/tweets",
      data: body
    })
      .done(function() {
        console.log("Yay something happened!!")
      })

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


  //when we post it call loadData()
  //end
});



