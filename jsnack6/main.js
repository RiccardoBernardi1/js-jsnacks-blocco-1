"use strict"
// 1. creo una lista di numeri interi
// 2. trovo tutti gli elementi in posizione dispari 
// 3. sommo tutti gli elementi con indice dispari 
const numbers= [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
let sum=0;
for (let i = 0; i < numbers.length; i++) {
    if ( ( i % 2 ) != 0){
        sum+=numbers[i];
        console.log(sum);
    }
}
console.log(sum);