"use strict"
let firstWord = prompt("inserisci la prima parola");
let secondWord = prompt("inserisci la seconda parola");
if(firstWord.length<secondWord.length){
    alert(`${firstWord} ${secondWord}`);
}else if (secondWord.length<firstWord.length){
    alert(`${secondWord} ${firstWord}`);
}else{
    alert("le parole hanno la stessa lunghezza");
}