(function (window) {
  var speakWord = "Good Bye";
    
  // object holding the speak function
  var byeSpeaker = {
    speakText: speakWord + " ",
    speak: function (name) {
      console.log(this.speakText + name);
    },
    speakSimple: function(name) {
      return this.speakText + name;
    }
  };
 
  window.byeSpeaker = byeSpeaker;
  
})(window);
