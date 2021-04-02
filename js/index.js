'use strict'
document.querySelector('.content-body-questions').addEventListener('click', ()=>{
    var parrafo =document.querySelector('p');
    var question = document.querySelector('h2');
    
    
    if(parrafo.style.display == "block"){
        parrafo.style.display = "none"
        question.style.fontWeight = "normal"
    } else{
        parrafo.style.display = "block";
        question.style.fontWeight = "bold"
    }
});