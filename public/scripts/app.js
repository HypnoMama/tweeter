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

  const $tweet = createTweetElement(tweets);
  const $tweetsContainer = $('#tweets-container')
  $tweetsContainer.append($tweet);




  //end
});



