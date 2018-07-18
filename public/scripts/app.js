/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){

  const tweets = {
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
  }

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

    let $article = $('<article>')//creates the article element
    $article.addClass('prev-tweet')
    let $header = $('<header>')

    //need to add info into header before appending
    $header.text(name)
    $header.append($image)
    $span.text(handle);
    $header.append($span);
    $footer.text(daysAgo);
    $footer.append($spanFooterIcons)
    $spanFooterIcons.append($flag).append($retweet).append($heart)
    $text.text(content);


    $article.append($header);
    $article.append($text);
    $article.append($footer);






    return $article.html();



  }

  createTweetElement(tweets);


  //end
})


