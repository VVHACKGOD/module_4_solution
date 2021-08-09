(function (window) {
  var names = ["Yaakov", "John", "Cena", "Jason", "Jordan", "Frank", "iberty", "Paula", "Laura", "Jimmy"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);
