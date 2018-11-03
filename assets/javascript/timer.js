var timer = 6;
var countdown;
var missed = 0;
var score=0;

var wrong = 0;
var question;
var questionIndex = [];



function timerStart () {
    clearInterval(countdown);
    timer = 6;
    countdown = setInterval(timerCountDown, 1000);
};

function timerCountDown () {
    timer--;
    $("#timer").text("Time Remaining: " + timer + " seconds");
    
    // quiz.questionIndex++;

    if (timer<=0 && quiz.questionIndex >= 4 ){
        missed++;
        stopTimer();
        showScores();
    }

     if (quiz.questionIndex >= 4) {
        missed++;
        stopTimer();
        showScores();
    
    } 
    if (timer <= 0) {
        
        stopTimer();
        missed++;
        
        setTimeout(skip, 1000);
    }
    
};

function stopTimer () {
    clearInterval(countdown);
}