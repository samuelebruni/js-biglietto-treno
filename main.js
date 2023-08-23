/* DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.
*/

/* STRUMENTI

- prompt
- const / let
- consolelog
- condizioni
- 

*/

//Chiedere l'eta e quanti km deve effettuare il passeggero

const userKm = Number (prompt ("Quanti KM devi percorrere?"));
const userAge = Number (prompt ("Quanti anni hai?"));

console.log("KM", userKm,"Età",  userAge);

//Calcolare il prezzo totale del viaggio

let priceForKm= 0.21;
const priceTicket = priceForKm * userKm;

console.log(priceTicket, "euro");

//Applicare sconto per i minorenni del 20%

let salePrice;

if (userAge < 18){

    salePrice = (priceTicket / 100) * 20;

} else if (userAge > 65 ){

    salePrice = (priceTicket / 100) * 40;
    //sconto per over 65

} else {

    salePrice = 0
    console.log("Non hai diritto ad alcuno sconto");
    //nessuna scontistica

}

let finalPrice = priceTicket - salePrice;
finalPrice = finalPrice.toFixed(2);

console.log("prezzo finale con applicazione eventuale di sconto", finalPrice, "euro");


document.getElementById("myticket").innerHTML = "Il tuo biglietto costerà" + " " + finalPrice + "€";