(function (window) {
  var speakWord = "Hello";

  // object holding the speak function
  var helloSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };

  window.helloSpeaker = helloSpeaker;

})(window);