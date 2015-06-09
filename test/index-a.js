var should = require('chai').should(),
    prologue = require('../index'),
    escape = prologue.escape,
    unescape = prologue.unescape,
    path = require('path');

var appRoot = path.resolve(__dirname);

var fileName = appRoot+'/www-debug.log',
    tagName = 'INFO',
    message = {},
    currentTimestamp,
    previousTimestamp;

describe('#escape', function() {

  it('initializes prologue', function() {
    prologue.initPrologue(fileName);
    prologue.logText('******** The app has been started *********');
  });

  it('converts & into &amp;', function() {
    message.val = 'converts & into &amp;';
    message.info = 'test info';
    currentTimestamp = new Date().getTime();
    previousTimestamp = new Date().getTime();
    prologue.log(tagName, message, currentTimestamp, previousTimestamp);
    escape('&').should.equal('&amp;');
    previousTimestamp = currentTimestamp;
  });

   it('converts " into &quot;', function() {
    message = 'converts " into &quot;';
    currentTimestamp = new Date().getTime();
    prologue.log(tagName, message, currentTimestamp, previousTimestamp);
    escape('"').should.equal('&quot;');
    previousTimestamp = currentTimestamp;
  });

  it("converts ' into &#39;", function() {
    message = "converts ' into &#39;";
    currentTimestamp = new Date().getTime();
    prologue.log(tagName, message, currentTimestamp, previousTimestamp);
    escape("'").should.equal('&#39;');
    previousTimestamp = currentTimestamp;
  });

  it('converts < into &lt;', function() {
    message = 'converts < into &lt;';
    currentTimestamp = new Date().getTime();
    prologue.log(tagName, message, currentTimestamp, previousTimestamp);
    escape('<').should.equal('&lt;');
    previousTimestamp = currentTimestamp;
  });

  it('converts > into &gt;', function() {
    message = 'converts > into &gt;';
    currentTimestamp = new Date().getTime();
    prologue.log(tagName, message, currentTimestamp, previousTimestamp);
    escape('>').should.equal('&gt;');
    previousTimestamp = currentTimestamp;
  });
});