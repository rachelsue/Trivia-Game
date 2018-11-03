//sends three parameters to function Question (text, choices, answer)
function populate() {
    //first check if quiz has ended
    if (quiz.isEnded()) {
        showScores();
        
} else

//    $("#questions").hide();
//    $("#answers").hide();
    //show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
       
        var element = document.getElementById("choice"+i);
        element.innerHTML = choices[i];
        
        //detect if user clicked on a correct answer
        guess ("btn" + i, choices[i]);
       
    }
    
    showProgress();
    timerStart();

};

function skip() {
    
    quiz.questionIndex++

    if (quiz.isEnded()) {
        showScores();
    } else 
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    //show choices
    var choices = quiz.getQuestionIndex().choices;
    quiz.questionIndex.choices++;
    for (var i = 0; i < choices.length; i++) {
       
        var element = document.getElementById("choice"+i);
        element.innerHTML = choices[i];
        
        //detect if user clicked on a correct answer
        guess ("btn" + i, choices[i]);

}

showProgress();
timerStart();
};

// function newPage(){
//     $("#questions").hide("fast");
//    $("#answers").hide("fast");
// };

function guess (id, guess) {
    var button = (document.getElementById(id));
    button.onclick = function() {
        quiz.guess(guess); //sent back through guess controller
        //recall populate function to either end quiz or send next question
        
        // if (choice!==quiz.getQuestionIndex().answer) {
        //     $("#question").text("You got it wrong! The correct answer is " + questions.getQuestionIndex().answer+ "!");
        // }
        stopTimer();
        // $('button').click.stopImmediatePropagation();
        
        // $("#question").text("You got it right!");
        setTimeout(populate, 3000)
    }
};

//check progress of quiz
function showProgress () {
    //change footer
    var currentQuestionNumber = quiz.questionIndex + 1;
    //when user selects an answer change to next index
    var element = document.getElementById("progress");
    element.innerHTML = "Question  " + currentQuestionNumber + " of " + quiz.questions.length;
};


//show scores function
function showScores() {
    var gameOverHtml = "<h1>Result</h1>"; //header
    gameOverHtml += "<p><h2 id = 'score'> Your score: " + quiz.score + "</h2></p><p><h2 id = 'wrong'> Wrong Guesses: " + quiz.wrong + "</h2></p>" +
    "<p><h2 id = 'missed'>  Missed: " + missed + "</h2></p>"
    var element = document.getElementById("quiz"); //write over html
    element.innerHTML = gameOverHtml;
};

//variables
// var count = 31;
// var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
var questions = [
    new Question ("Who said: There are no men like me, there is only me.", //question
    ["Sandore Clegane", "Tyrion Lannister", "Jamie Lannister", "Peter Baelish"], //choices array
    "Jaime Lannister"),                //answer, pic
    new Question ("Whose deaths does Arya request from Jaquen H'jhar?",
    ["the Tickler, Weese, Jaquen H'jhar", "the Tickler, Cersei, Jaquen H'jhar", "Cersei, Chiswyck, the Tickler", "Chiswyck, Weese, Jaquen H'jhar"],
    "Chiswyck, Weese, Jaquen H'jhar"),
    new Question ("What were the names given to the two swords made from Ice?",
    ["Oathkeeper and Lion's Tooth", "Widow's Wail and Oathkeeper", "Lion's Tooth and Longclaw", "Heartbane and Widow's Wail"],
    "Widow's Wail and Oathkeeper"),
    new Question ("Where did Lyanna die?",
    ["Winterfell", "Summerhall", "On an ship with no name", "The Tower of Joy"],
    "The Tower of Joy")
];

//create Object for Quiz Controller
var quiz = new Quiz (questions);      //same paramerters as controller
// var startTimer = new startTimer (1000,30);


    $("#startBtn").on("click", function() { //start the game, screen change
        $(".grid").show();
        $("#start").hide();
        populate();  //populate the questions and check if question is correct for scoring
        timerStart();
    }); 