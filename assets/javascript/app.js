

// Questions

var questions = [
  {
    question: "Why so JavaScript and Java have similar name?",
    answers: ["JavaScript is a stripped-down version of Java", "JavaScript's syntax is loosely based on Java's", "They both originated on the island of Java", "None of the above"],
    correctAnswer: "JavaScript's syntax is loosely based on Java's"
  },
  {
    question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answers: ["The User's machine running a Web browser", "The Web server", "A central machine deep within Netscape's corporate offices", "None of the above"],
    correctAnswer: "The User's machine running a Web browser"
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of the above"],
    correctAnswer: "Storing numbers"
  },
  {
    question: "Which of the following can't be done with client-side JavaScript?",
    answers: ["Validating a form","Sending a form's contents by email"," Storing the form's contents to a database file on the server","None of the above"],
    correctAnswer: " Storing the form's contents to a database file on the server"
  },
  {
    question: "Which of the following attribute can hold the JavaScript version?",
    answers: ["LANGUAGE", "SCRIPT", "VERSION", "None of the above"],
    correctAnswer: "LANGUAGE"
  }];

var timer;
var card = $("#second-container");
var game = {
  correct: 0,
  incorrect: 0,
  
  counter: 30,

  countdown: function() {
    game.counter--;
   $("#counter-number").html(game.counter);
  if (game.counter === 0) {
   console.log("TIME UP");
  game.done();
   }
  },
start: function() {
   timer = setInterval(game.countdown, 1000);

    $("#second-container").prepend(
    "<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>"
   );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },
 done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },
 result: function() {
 clearInterval(timer);
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
game.done();
});
