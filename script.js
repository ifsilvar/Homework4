//assignment variables
var hsEl = document.querySelector("#HS");
var scoreEl = document.querySelector("#scorecount")
var timeEl = document.querySelector("#time");
var questionEl = document.querySelector("#qblock");
var buttonAEl = document.querySelector("#buttonA");
var buttonBEl = document.querySelector("#buttonB");
var buttonCEl = document.querySelector("#buttonC");
var buttonDEl = document.querySelector("#buttonD");
var anstatusEl = document.querySelector("#anstatus");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
var qArea = document.querySelector("#qContainer");

var score = 0;
var qindex = 0;
var secondsLeft = 30;

//array of object questions
var questions = [
    {question: "What does JSON stand for?", choices: ["JavaScript Object Numbers", "JavaScript Operator Notation", "JavaScript Object Notation", "JavaScript Open Notation"], answer: "JavaScript Object Notation"}, //C
    {question: "What DOM command is used to choose any HTML element?", choices: ["green", "querySelector()", "blue", "orange"], answer: "querySelector()"},//B
    {question: "What JSON command is used to convert objects to strings?", choices: ["purple", "pink", "blue", "stringify"], answer: "stringify"},//D
    {question: "What is an API?", choices: ["red", "pink", "blue", "Application Programming Interface"], answer: "Application Programming Interface"},//D
    {question: "How do you compare to data types and their values?", choices: ["===", "pink", "blue", "brown"], answer: "==="}, //A
    {question: "What DOM command is used to delete an element?", choices: ["green", "remove()", "sfsfsd", "brown"], answer: "remove()"}, //B
    {question: "What DOM command is used to ADD an new element?", choices: ["green", "fsdfsd", "blue", "append()"], answer: "append()"},//D
    {question: "What is a local variable?", choices: ["variable that is only accessible within a function", "pink", "blue", "bmnbmn"], answer: "variable that is only accessible within a function"},//A
    {question: "What command is used to store to local storage?", choices: ["red", "pink", "localStorage.setItem()", "sfdfe"], answer: "localStorage.setItem()"},//C
    {question: "What DOM command is used to MAKE an new element?", choices: ["createElement()", "pink", "blue", "brown"], answer: "createElement()"},//A
    {question: "Final Score", choices:["","","",""], answer: ""}
]
//writing to question block
function writeCurrentq(){
    questionEl.innerHTML = questions[qindex].question;
    choiceA.innerHTML = questions[qindex].choices[0];
    choiceB.innerHTML = questions[qindex].choices[1];
    choiceC.innerHTML = questions[qindex].choices[2];
    choiceD.innerHTML = questions[qindex].choices[3];  
}

writeCurrentq();




var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
    clearInterval(timerInterval);
    sendMessage();
    }
}, 1000);


function sendMessage() {
    timeEl.textContent = "TIME UP!";
    timeEl.style.color = "#ff0000";
    setInterval(function() {
        timeEl.style.display = (timeEl.style.display == 'none' ? '' : 'none');
        }, 500);
    var imgEl = document.createElement("img");
    imgEl.style.width = "90vw";
    imgEl.setAttribute("src", "images/iu-11.png");
    document.querySelector("#imgtime").appendChild(imgEl);
  
    var myobj = document.getElementById("body");
    myobj.remove();
    setTimeout(function(){alert("TIME UP!"+"\n"+"Refresh to restart quiz!"); }, 1500);    
}



if(secondsLeft !=0){
//button correct/incorrect states
buttonAEl.addEventListener("click", function(event){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[0] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[0] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[0] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }
    if(qindex === 10){
        setTimeout(function(){prompt("Score: " + score + "\n" + "Enter Initials"); }, 1000); 
        function myStopFunction() {
            clearInterval(timerInterval);
        }
        myStopFunction();
        document.getElementById("qContainer").remove();
    };
    writeCurrentq();
    return;
})

buttonBEl.addEventListener("click", function(){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[1] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){//
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[1] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }
    if(qindex === 10){
        setTimeout(function(){prompt("Score: " + score + "\n" + "Enter Initials"); }, 1000); 
        function myStopFunction() {
            clearInterval(timerInterval);
        }
        myStopFunction();
        document.getElementById("qContainer").remove();
    };
    writeCurrentq();

})

buttonCEl.addEventListener("click", function(){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[2] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[2] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }
    if(qindex === 10){
        setTimeout(function(){prompt("Score: " + score + "\n" + "Enter Initials"); }, 1000); 
        function myStopFunction() {
            clearInterval(timerInterval);
        }
        myStopFunction();
        document.getElementById("qContainer").remove();
    };
    writeCurrentq();

})

buttonDEl.addEventListener("click", function(){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[3] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[3] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect! -3 Seconds");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        secondsLeft = secondsLeft - 3;
    }
    if(qindex === 10){
        setTimeout(function(){prompt("Score: " + score + "\n" + "Enter Initials"); }, 1000); 
        function myStopFunction() {
            clearInterval(timerInterval);
        }
        myStopFunction();
        document.getElementById("qContainer").remove();
    };
    writeCurrentq();
    
})




}
