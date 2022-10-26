"use strict"
let firstWord = prompt("inserisci la prima parola");
let secondWord = prompt("inserisci la seconda parola");
if(firstWord.length>secondWord.length){
    alert("la prima parola è più lunga");
}else if (secondWord.length>firstWord.length){
    alert("la seconda parola è più lunga");
}else{
    alert("le parole hanno la stessa lunghezza");
}