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

//array of object questions
var questions = [
    {question: "what color is the sky?", choices: ["green", "pink", "blue", "brown"], answer: "blue"}, 
    {question: "what color are bannanas?", choices: ["green", "yellow", "blue", "orange"], answer: "yellow"},
    {question: "what color is a leaf?", choices: ["green", "pink", "blue", "green"], answer: "green"},
    {question: "what color is coffee?", choices: ["green", "pink", "blue", "brown"], answer: "brown"},
    {question: "what color is a outer space?", choices: ["black", "pink", "blue", "brown"], answer: "black"}
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

buttonAEl.addEventListener("click", function(){
        //do this when a button is clicked,
    if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect!");
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[0] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[0] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }
    writeCurrentq();

})

buttonBEl.addEventListener("click", function(){
        //do this when a button is clicked,
    if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[1] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }
    writeCurrentq();

})

buttonCEl.addEventListener("click", function(){
        //do this when a button is clicked,
    if(questions[qindex].choices[2] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }
    writeCurrentq();
    
})

buttonDEl.addEventListener("click", function(){
        //do this when a button is clicked,
    if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Inorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[3] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }
    writeCurrentq();

})





  //working next correct answer






/*function correctAnswer(){
    
    if(qindex = 0 && questions[qindex].answer == questions[qindex].choices[2]){
        alert("correct!");
        qindex++; 
    }
        
        
        
}
    //if(buttonCEl.addEventListener("click", function(){ alert("Correct!") == true})){
        //qindex++;
    
    

    




correctAnswer();

/*var questions1 = [
    Question("what color is the sky?", ["green", "pink", "blue", "brown"], "blue"),
    Question("what color are bannanas", ["green", "yellow", "blue", "orange"], "yellow"),
    Question("what color is a leaf?", ["green", "pink", "blue", "green"], "green"),
    Question("what color is coffee?", ["green", "pink", "blue", "brown"], "brown"),
    Question("what color is a outer space", ["black", "pink", "blue", "brown"], "black"),
];*/