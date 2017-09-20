// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  // loop over names
  for (var idx in names) {
    // get first letter of each name
    var firstLetter = names[idx].charAt(0);
    
    // if letter is j/J, say goodbye, otherwise say hello
    if (firstLetter.toLowerCase() === 'j') {
      byeSpeaker.speak(names[idx]);
    } else {
      helloSpeaker.speak(names[idx]);
    }
  }
}) ();




