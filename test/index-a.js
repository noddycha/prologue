var should = require('chai').should(),
    scapegoat = require('../index'),
    escape = scapegoat.escape,
    unescape = scapegoat.unescape,
    log = scapegoat.log;

var fileName = '/tmp/www_profile',
    tagName = 'INFO',
    message,
    currentTimestamp,
    previousTimestamp;

describe('#escape', function() {

  it('converts & into &amp;', function() {
    message = 'converts & into &amp;'
    currentTimestamp = new Date().getTime();
    previousTimestamp = 0;
    log(fileName, tagName, message, currentTimestamp, previousTimestamp);
    escape('&').should.equal('&amp;');
    previousTimestamp = currentTimestamp;
  });

   it('converts " into &quot;', function() {
    message = 'converts " into &quot;';
    currentTimestamp = new Date().getTime();
    log(fileName, tagName, message, currentTimestamp, previousTimestamp);
    escape('"').should.equal('&quot;');
    previousTimestamp = currentTimestamp;
  });

  it("converts ' into &#39;", function() {
    message = "converts ' into &#39;";
    currentTimestamp = new Date().getTime();
    log(fileName, tagName, message, currentTimestamp, previousTimestamp);
    escape("'").should.equal('&#39;');
    previousTimestamp = currentTimestamp;
  });

  it('converts < into &lt;', function() {
    message = 'converts < into &lt;';
    currentTimestamp = new Date().getTime();
    log(fileName, tagName, message, currentTimestamp, previousTimestamp);
    escape('<').should.equal('&lt;');
    previousTimestamp = currentTimestamp;
  });

  it('converts > into &gt;', function() {
    message = 'converts > into &gt;';
    currentTimestamp = new Date().getTime();
    log(fileName, tagName, message, currentTimestamp, previousTimestamp);
    escape('>').should.equal('&gt;');
    previousTimestamp = currentTimestamp;
  });
});

describe('#unescape', function() {

  it('converts &amp; into &', function() {
    message = 'converts &amp; into &';
    currentTimestamp = new Date().getTime();
    log(fileName, tagName, message, currentTimestamp, previousTimestamp);
    unescape('&amp;').should.equal('&');
    previousTimestamp = currentTimestamp;
  });

  it('converts &quot; into "', function() {
    message = 'converts &quot; into "';
    currentTimestamp = new Date().getTime();
    log(fileName, tagName, message, currentTimestamp, previousTimestamp);
    unescape('&quot;').should.equal('"');
    previousTimestamp = currentTimestamp;
  });

  it("converts &#39; into '", function() {
    message = "converts &#39; into '";
    currentTimestamp = new Date().getTime();
    log(fileName, tagName, message, currentTimestamp, previousTimestamp);
    unescape('&#39;').should.equal("'");
    previousTimestamp = currentTimestamp;
  });

  it('converts &lt; into <', function() {
    message = 'converts &lt; into <';
    currentTimestamp = new Date().getTime();
    log(fileName, tagName, message, currentTimestamp, previousTimestamp);
    unescape('&lt;').should.equal('<');
    previousTimestamp = currentTimestamp;
  });

  it('converts &gt; into >', function() {
    message = 'converts &gt; into >';
    currentTimestamp = new Date().getTime();
    log(fileName, tagName, message, currentTimestamp, previousTimestamp);
    unescape('&gt;').should.equal('>');
    previousTimestamp = currentTimestamp;
  });
});