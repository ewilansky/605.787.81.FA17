(function (window) {
  var speakWord = "Good Bye";
    
  // object holding the speak function
  var byeSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };
 
  window.byeSpeaker = byeSpeaker;
  
})(window);
