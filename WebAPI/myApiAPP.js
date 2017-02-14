/**
 * Created by Taiwo Amao on 2/14/2017.
 * Generates random quotes
 */
'use strict';
var xp = require('request-promise');
var options = {
  uri: 'http://quotes.stormconsultancy.co.uk/quotes.json',
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true // Automatically parses the JSON string in the response
};
xp(options)
  .then(function (response) {
    for (var i =0; i<15;i++){
      console.log('QUOTE: ' + response[i].quote + ' AUTHOR: ' + response[i].author);}
  })
  .catch(function (err) {
    console.error(err);
  });