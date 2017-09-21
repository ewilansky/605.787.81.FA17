(function (window) {
  var speakWord = "Hello";

  // object holding the speak function
  var helloSpeaker = {
    speakText: speakWord + " ",
    speak: function (name) {
      console.log(this.speakText + name);
    },
    speakSimple: function(name) {
      return this.speakText + name;
    }
  };

  window.helloSpeaker = helloSpeaker;

})(window);