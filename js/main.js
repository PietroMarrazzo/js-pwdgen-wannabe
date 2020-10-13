// alert
alert("Ciao! Inserisci le tue generali nei seguenti forms");

// nome
var nome=prompt("Inserisci il tuo nome");
// cognome
var cognome=prompt("Inserisci il tuo cognome");
// colore
var colore=prompt("Inserisci il tuo colore preferito");
// visualizzazione
document.getElementById("generali").innerHTML= nome + " " + cognome + " " + colore + " " + 19;
