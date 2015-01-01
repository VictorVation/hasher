(function () {
  var $ = document.querySelector.bind(document);
  var $key = $('#key');
  var $site = $('#site');
  var $hash = $('#hash');
  var $show = $('[role=show]');
  var $info = $('.info');

  var update = function() {

    // Compute the first 16 base64 characters of iterated-SHA-256(domain + '/' + key, 2 ^ difficulty).
    var key = $key.value;
    var domain = $site.value;

    if (!key || !site) {
      $hash.value = '';
      return;
    }

    var rounds = Math.pow(2, 16);
    var bits = domain + '/' + key;
    for (var i = 0; i < rounds; i += 1) {
      bits = sjcl.hash.sha256.hash(bits);
    }

    var hash = sjcl.codec.base64.fromBits(bits).slice(0, 14);
    $hash.value = hash;
    return hash;
  };

  // A debounced version of update().
  var timeout = null;
  var debouncedUpdate = function() {
    if (timeout !== null) {
      clearInterval(timeout);
    }
    timeout = setTimeout((function() {
      update();
      timeout = null;
    }), 200);
  };

  // Add our event listeners.
  'propertychange change keyup input paste'.split(' ').map(function(ev) {
    [$key, $site].map(function(el) {
      return el.addEventListener(ev, debouncedUpdate);
    });
  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46624647-1', 'auto');
  ga('send', 'pageview');
})();
