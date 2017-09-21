// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  console.log('Logging values the first time:');
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

  // JHU additional work to use Array.prototype.map:

  // function that will be called by map. In this case, using 
  // the speakSimple function that returns a value
  function printGreeting(x) {
    var firstLetter = x.charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      console.log(byeSpeaker.speakSimple(x));
    } else {
      console.log(helloSpeaker.speakSimple(x));
    }
  };

  console.log('\nLogging values the second time:');
  // call map to iterate the array and call a function on the values
  names.map(printGreeting);

  // JHU Bonus work, using Array.prototype.reduce:
  var greetings = {
    hello: [],
    bye: []
  };

  names.reduce((matchingNames, firstName) => {
    if (firstName.charAt(0).toLowerCase() !== 'j') {
      matchingNames.push(firstName);
    }
    return greetings.hello = matchingNames;
  }, []);

  names.reduce((matchingNames, firstName) => {
    if (firstName.charAt(0).toLowerCase() === 'j') {
      matchingNames.push(firstName);
    }
    return greetings.bye = matchingNames;
  }, []);
  
  console.log('\nLogging values the third time (bonus work):');
  
  console.log('\nThe hello values:')
  greetings.hello.map(function(name) {
    console.log(helloSpeaker.speakSimple(name));
  });
  
  console.log('\nThe goodbye values:')
  greetings.bye.map(function(name) {
    console.log(byeSpeaker.speakSimple(name));
  });
    
}) ();




