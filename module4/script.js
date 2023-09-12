(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (i in names) {
    var firstLetter = names[i].charAt(0);
    firstLetter = firstLetter.toLocaleLowerCase();
    if (firstLetter == "j") 
      byeSpeaker.speak(names[i]);
    else 
      helloSpeaker.speak(names[i]);
  }
})();
