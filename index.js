/**
* Logs application activity along with respective time taken for each requests
*
*/
var fs = require('fs');

(function() {

  var log_path = '';

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

  function initPrologue(log_path) {
    var writeString = '';
    this.log_path = log_path;
    fs.appendFileSync(this.log_path, writeString, encoding='utf8');
    fs.truncate(this.log_path, 0, function(){
      console.log('Log file initialized');
    });
  }

  function log(tagName, message, currentTimestamp, previousTimestamp) {
    var writeString = buildStringMessage(tagName, message, currentTimestamp, previousTimestamp);

    fs.appendFile(this.log_path, writeString, encoding='utf8', function(err) {
      if(err) {
        return console.log('log write error');
      }
      return console.log('log write success');
    });
  }

  function logSync(tagName, message, currentTimestamp, previousTimestamp) {
    var writeString = buildStringMessage(tagName, message, currentTimestamp, previousTimestamp);

    fs.appendFileSync(this.log_path, writeString, encoding='utf8');
  }

  /**
  * Sample method for unit testing
  */
  function escape(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function logText(text) {
    fs.appendFileSync(this.log_path, text, encoding='utf8');
  }

  module.exports = {
    initPrologue: initPrologue,
    log: log,
    logSync: logSync,
    escape: escape,
    logText: logText
  };

}).call(this);