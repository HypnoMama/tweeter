"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    //modify to save to mongo => insertOne()
    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
    //take the newTweet and add it to database
        db.collection("tweets").insertOne(newTweet, (err, res) => {
          console.log("New tweet added");
        });

        callback(null, true);
    },

    //modify to get mongo tweets => .find()
    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      // console.log(db.tweets.find())
      db.collection("tweets").find().toArray((err, tweets) => {
        const sortNewestFirst = (a, b) => {
          a.created_at - b.created_at;
        }

        callback(null, tweets.sort(sortNewestFirst));
      });

    }
    //  getTweets: function(callback) {
    //   db.collection("tweets").find().toArray((err, tweets) => {
    //   if (err) {
    //     return callback(err);
    //   }
    //   callback(null, tweets);
    //   });
    // }

  };
}
