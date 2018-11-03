//constructive function (of a class, receiving 3 paramerers storing in these variables
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.timer = timer;


  
}

//check for correct answer
//parameter choice stores user clicked option
Question.prototype.correctAnswer = function(choice) {
    // $("#question").text("You got it right!");
    return choice === this.answer;
    
}

Question.prototype.incorrectAnswer = function(choice) {
    // $("#question").text("You got it wrong! The correct answer is " + quiz.getQuestionIndex().answer+ "!");
    return choice !== this.answer; 
}

// Question.prototype.missed = function(choice) {
//     if (timer==0) {
//     return choice[i+1]; //my change
// }
// }


