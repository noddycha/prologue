/**
* Logs application activity along with respective time taken for each requests
*
*/

(function() {

  function getTimeDifference(currentTimestamp, previousTimestamp) {
    return currentTimestamp - previousTimestamp;
  }

  function buildStringMessage(tagName, message, currentTimestamp, previousTimestamp) {
    var newLine = '\n';
    var tab = '::\t';
    var logTime = new Date();
    var timeDifference = getTimeDifference(currentTimestamp, previousTimestamp);
    return logTime + tab + tagName + tab + JSON.stringify(message) + tab + currentTimestamp + tab + previousTimestamp + tab + timeDifference + newLine;
  }

  function log(fileName, tagName, message, currentTimestamp, previousTimestamp) {
    var fs = require('fs');
    var writeString = buildStringMessage(tagName, message, currentTimestamp, previousTimestamp);

    fs.appendFile(fileName, writeString, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log('File writtern');
    });
  }

 /**
 * Sample method for unit testing
 **/
  function escape(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  module.exports = {
    log: log,
    escape: escape
  };
}).call(this);