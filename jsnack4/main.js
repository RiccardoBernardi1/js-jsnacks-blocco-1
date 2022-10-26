"use strict"
const list=["Piero","Gianni","Francesco"];
const name= prompt("Inserisci il tuo nome");
let invitato = false;
for (let i = 0; i < list.length; i++) {
    if (name===list[i]){
        alert("Puoi entrare");
        invitato=true;
        break
    }
}
if (invitato == false){
    alert("Non puoi entrare");
}