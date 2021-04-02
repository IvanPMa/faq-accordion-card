'use strict'

document.querySelector('.one').addEventListener('click', ()=>{
    var answer =document.getElementById('answer-1')
    var question = document.getElementById('question-1');
    
    
    if(answer.style.display == "block"){
        answer.style.display = "none"
        question.style.fontWeight = "normal"
    } else{
        answer.style.display = "block";
        question.style.fontWeight = "bold"
    }
});



function showAnswer(){
    
}

