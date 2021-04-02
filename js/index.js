'use strict'
// function that displays the answers and styles
function showAnswer(answer,question){
    if(answer.style.display == "block"){
        answer.style.display = "none"
        question.style.fontWeight = "normal"
    } else{
        answer.style.display = "block";
        question.style.fontWeight = "bold"
    }
}

// First question
document.querySelector('.one').addEventListener('click', ()=>{
    var answer =document.getElementById('answer-1')
    var question = document.getElementById('question-1');
    showAnswer(answer,question);
    
});
// Second question
document.querySelector('.two').addEventListener('click', ()=>{
    var answer =document.getElementById('answer-2')
    var question = document.getElementById('question-2');
    showAnswer(answer,question);
    
});
// Third question
document.querySelector('.three').addEventListener('click', ()=>{
    var answer =document.getElementById('answer-3')
    var question = document.getElementById('question-3');
    showAnswer(answer,question);
    
});
// Four question
document.querySelector('.four').addEventListener('click', ()=>{
    var answer =document.getElementById('answer-4')
    var question = document.getElementById('question-4');
    showAnswer(answer,question);
    
});
// Five question
document.querySelector('.five').addEventListener('click', ()=>{
    var answer =document.getElementById('answer-5')
    var question = document.getElementById('question-5');
    showAnswer(answer,question);
    
});




