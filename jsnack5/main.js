"use strict"
const numbers=[];
for (let i = 0; i < 6; i++) {
    let num=Number(prompt("inserisci un numero"));
    if ((num % 2) != 0){
        numbers.push(num)
    }
}
console.log(numbers)