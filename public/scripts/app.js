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
    let handle = data.user.handle
    let avatar = data.user.avatars.small
    let content = data.content.text
    let createdAt = data.created_at
    let dateCreated = new Date(createdAt)
    let currentDate = new Date();

    let $span = $('<span>').attr('id', 'handle')
    let $image = $('<img>').attr('src', avatar)
    let $text = $('<p>')
    let $footer = $('<footer>')
    let $spanFooterIcons = $('<span>').attr('id', 'icons');
    let $flag = $('<i>').addClass('fas fa-flag')
    let $retweet = $('<i>').addClass('fas fa-retweet')
    let $heart = $('<i>').addClass('fas fa-heart')
    let daysAgo = moment(dateCreated).fromNow();

    let $article = $('<article>').addClass('prev-tweet');//creates the article element
    let $header = $('<header>')

    //need to add info into header before appending
    $header.text(name)//adds the name text to the header
    $header.append($image)//appends the image tag to the header
    $span.text(handle);//adds the persons handle to the header span
    $header.append($span);//appends handle span to header
    $footer.text(daysAgo);//adds text to the footer
    $spanFooterIcons.append($flag).append($retweet).append($heart);
    $footer.append($spanFooterIcons)//
    $text.text(content);
    //can refactor to one line
    //let header = $.text().append()
    //look into appendTo()


    $article.append($header);
    $article.append($text);
    $article.append($footer);

    return $article
    //no need to return the html as we've appended everything to the
    // article itself


  }

  function renderTweets(aryOfTweetObjs) {
    aryOfTweetObjs.forEach(function(tweet) {
      let newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
    });
  }

  renderTweets(tweets);



  //when we post it call loadData()
  //end
});



