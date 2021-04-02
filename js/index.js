'use strict'
document.querySelector('.content-body-questions').addEventListener('click', ()=>{
    var parrafo =document.querySelector('p');
    
    
    if(parrafo.style.display == "block"){
        parrafo.style.display = "none"
    } else{
        parrafo.style.display = "block";
    }
});