/**
* Logs application activity along with respective time taken for each requests
* Testing with existing sample
*/

(function() {

  function getTimeDifference(currentTimestamp, previousTimestamp) {
    return currentTimestamp - previousTimestamp;
  }

  function log(fileName, tagName, message, currentTimestamp, previousTimestamp) {
    var fs = require('fs');
    var newLine = '\n';
    var tab = '\t';
    var timeDifference = getTimeDifference(currentTimestamp, previousTimestamp);
    var writeString = tagName + tab + message + tab + currentTimestamp + tab + previousTimestamp + tab + timeDifference + newLine;
    fs.appendFile(fileName, writeString, function(err) {
      if(err) {
        return console.log(err);
      }

      console.log('File writtern');
    });
  }

  function escape(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function unescape(html) {
    return String(html)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  module.exports = {
    log: log,
    escape: escape,
    unescape: unescape
  };
}).call(this);