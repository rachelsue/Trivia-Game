//contains scores and number of questions

//constructive function
function Quiz(questions, timer) {
    this.score = 0;
    this.wrong = 0;
    this.questions = questions;
    this.questionIndex = 0;
    this.timer=timer;
    this.missed=0;
}

//get index of current question
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

//check if quiz ended or not
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}



//guess function to check if user choice is correct answer
Quiz.prototype.guess = function(answer) {
   
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++; 
        $("#question").text("You got it right!");
        console.log();

    } if (this.getQuestionIndex().incorrectAnswer(answer)) {
        this.wrong++;
        $("#answer").text("You got it wrong! The correct answer is " + quiz.getQuestionIndex().answer+ "!");
        console.log();
    }
    

     this.questionIndex++;
}